import { useState } from "react";
import { Flex, Text, ThemeIcon, Button, Modal } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconWifi, IconCopy } from "@tabler/icons-react";
import { QRCodeCanvas } from "qrcode.react";

export const ConnectWifi = () => {
  const ssid = "Orzu Medical"; // 🟦 название сети
  const password = "00004444"; // 🟦 пароль сети

  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.includes("android");
    const isChrome = ua.includes("chrome");

    if (isAndroid && isChrome) {
      const intentUrl = `intent://wifi#Intent;scheme=wifi;S=${ssid};P=${password};end`;
      window.location.href = intentUrl;
    } else {
      setOpened(true); // fallback → QR
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      notifications.show({
        title: "Успех",
        message: "Пароль Wi-Fi скопирован в буфер",
        color: "green",
        icon: <IconCopy size={18} />,
      });
    } catch {
      notifications.show({
        title: "Ошибка",
        message: "Не удалось скопировать пароль",
        color: "red",
      });
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Wi-Fi подключение" centered>
        <Flex direction="column" align="center" gap="16px">
          <QRCodeCanvas value={`WIFI:T:WPA;S:${ssid};P:${password};;`} size={200} />
          <Text fw={500}>{ssid}</Text>
          <Button
            leftSection={<IconCopy size={16} />}
            onClick={handleCopy}
            variant="light"
            color="blue"
          >
            Скопировать пароль
          </Button>
        </Flex>
      </Modal>

      <Flex
        onClick={handleClick}
        gap="12px"
        align="center"
        bg="white"
        wrap="wrap"
        miw="140px"
        p="12px"
        w="max-content"
        direction="column"
        justify="center"
        style={{
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        <ThemeIcon w="68px" h="68px" radius="100%" bg="#DBEAFE">
          <IconWifi size="38px" color="#2563EB" />
        </ThemeIcon>
        <Flex direction="column" justify="center" align="center">
          <Text fw={400} fz="16px" lh="24px">
            Подключиться
          </Text>
          <Text c="#6B7280">к Wi-Fi</Text>
        </Flex>
      </Flex>
    </>
  );
};
