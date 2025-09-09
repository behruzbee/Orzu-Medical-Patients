// entities/analyzes/ui/AnalyzeCard.tsx
import { PhotoViewer } from "@/shared/ui/photo-viewer";
import { ActionIcon, Box, Button, Flex, Text, ThemeIcon } from "@mantine/core";
import { IconDownload, IconEyeSearch, IconShare } from "@tabler/icons-react";
import React from "react";

export interface AnalyzeParam {
  label: string;
  value: string;
  status?: "normal" | "high" | "low";
}

export interface AnalyzeCardProps {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  date: string;
  image?: string;
  params: AnalyzeParam[];
  onView?: () => void;
  onDownload?: () => void;
  onShare?: () => void;
}

export const AnalyzeCard: React.FC<AnalyzeCardProps> = ({
  icon,
  iconBg,
  iconColor,
  title,
  date,
  image,
  params,
  onView,
  onDownload,
  onShare,
}) => {
  // дефолтное скачивание
  const handleDownload = () => {
    if (!image) return;
    const link = document.createElement("a");
    link.href = image;
    link.download = `${title}.jpg`;
    link.click();
    onDownload && onDownload()
  };

  // дефолтный шэринг
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: "Посмотри результат анализа",
          url: image,
        });
      } else {
        await navigator.clipboard.writeText(image || "");
        alert("Ссылка скопирована в буфер обмена");
      }
      onShare && onShare()
    } catch (e) {
      console.error("Ошибка при шаринге:", e);
    }
  };

  return (
    <Flex
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        borderRadius: 16,
      }}
      direction="column"
      p="21px"
      bg="#fff"
    >
      {/* Заголовок */}
      <Flex mb="14px" columnGap="12px" align="center">
        <ThemeIcon style={{ width: 48, height: 48 }} radius="md" bg={iconBg}>
          {React.cloneElement(icon as React.ReactElement, {
            // @ts-ignore
            size: 28,
            color: iconColor,
          })}
        </ThemeIcon>
        <Flex direction="column">
          <Text lh="24px" size="16px" c="#111827">
            {title}
          </Text>
          <Text size="14px" c="#6B7280">
            {date}
          </Text>
        </Flex>
      </Flex>

      {image && (
        <Box>
          <PhotoViewer image={image} />
        </Box>
      )}

      {/* Параметры */}
      <Flex direction="column" rowGap="8px" my="16px">
        {params.map((param) => (
          <Flex
            key={param.label}
            w="100%"
            justify="space-between"
            align="center"
          >
            <Text>{param.label}:</Text>
            <Text
              c={
                param.status === "high"
                  ? "red"
                  : param.status === "low"
                  ? "orange"
                  : "#111827"
              }
            >
              {param.value}
            </Text>
          </Flex>
        ))}
      </Flex>

      {/* Действия */}
      <Flex columnGap="12px">
        {onView && (
          <Button
            px={38}
            py={12}
            c="#fff"
            leftSection={<IconEyeSearch size={20} color="#fff" />}
            styles={{ root: { fontSize: 18 } }}
            onClick={onView}
          >
            Подробнее
          </Button>
        )}
        {image && (
          <>
            <ActionIcon
              style={{ minWidth: 48, height: 48 }}
              bg="#F3F4F6"
              onClick={handleDownload}
            >
              <IconDownload size={19} color="#4B5563" />
            </ActionIcon>

            <ActionIcon
              style={{ minWidth: 48, height: 48 }}
              bg="#F3F4F6"
              onClick={handleShare}
            >
              <IconShare size={19} color="#4B5563" />
            </ActionIcon>
          </>
        )}
      </Flex>
    </Flex>
  );
};
