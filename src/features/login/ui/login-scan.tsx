import { useRef, useState } from "react";
import { Card, Flex, Text, Title } from "@mantine/core";
import { IconQrcode, IconCamera } from "@tabler/icons-react";
import { motion, useMotionValue } from "framer-motion";

export const LoginScan = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const x = useMotionValue(0);

  const handleDragEnd = async (_: any, info: any) => {
    if (info.point.x > 220) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
        setCameraActive(true);
      } catch (err) {
        console.error("Camera error:", err);
      }
    } else if (info.point.x < 20) {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
      setCameraActive(false);
    }
    x.set(0);
  };

  return (
    <Card
      shadow="md"
      radius="lg"
      p="24px"
      withBorder
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #028D00, #6BE780)",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Flex direction="column" gap="md">
        <Title
          order={5}
          fw={600}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <IconQrcode size={22} />
          Quick Scan Login
        </Title>

        <Text size="sm" style={{ opacity: 0.85 }}>
          Slide to activate camera and scan your patient badge or QR code
        </Text>

        <div
          style={{
            position: "relative",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "40px",
            height: "56px",
            width: "100%",
            overflow: "hidden",
            marginTop: "12px",
          }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 240 }}
            style={{
              x,
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "white",
              color: "#028D00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 0,
              left: 0,
              cursor: "grab",
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            }}
            onDragEnd={handleDragEnd}
          >
            <IconCamera size={24} />
          </motion.div>

          <Text
            size="sm"
            fw={500}
            style={{
              position: "absolute",
              left: "70px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              opacity: 0.9,
            }}
          >
            Slide to Scan
          </Text>
        </div>

        {cameraActive && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{
              marginTop: "16px",
              borderRadius: "12px",
              width: "100%",
              maxHeight: "300px",
              objectFit: "cover",
            }}
          />
        )}
      </Flex>
    </Card>
  );
};
