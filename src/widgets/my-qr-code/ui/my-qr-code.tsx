import { Box, Flex, Image, Loader, Text } from "@mantine/core";
import examplQRCode from "@/shared/assets/images/qr-code.png";
import { useEffect, useState } from "react";

export const MyQrCode = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <Flex
      py="24px"
      align="center"
      direction="column"
      bdrs="16px"
      gap="20px"
      bg="white"
      mt="20px"
    >
      <Flex direction="column" align="center" justify="center">
        <Text
          styles={{
            root: { fontSize: "20px", lineHeight: "32px", marginBottom: "5px" },
          }}
        >
          Ваш QR-код на сегодня
        </Text>
        <Text
          ta="center"
          color="#6B7280"
          styles={{ root: { fontSize: "16px", lineHeight: "20px" } }}
          w="244px"
        >
          Покажите этот код при прохождений процедуры
        </Text>
      </Flex>
      <Box w="180px" p="15px" bg="#F3F4F6" bdrs="16px">
        {isLoading ? (
          <Flex
            w="150px"
            h="150px"
            bg="#E5E7EB"
            bdrs="8px"
            m="auto"
            style={{ animation: "pulse 2s infinite" }}
            justify="center"
            align="center"
            children={<Loader />}
          />
        ) : (
          <Image
            w="150px"
            h="150px"
            fit="contain"
            src={examplQRCode}
            alt="QR Code"
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        )}
      </Box>
      <Text>ID: PAT-2024-001</Text>
    </Flex>
  );
};
