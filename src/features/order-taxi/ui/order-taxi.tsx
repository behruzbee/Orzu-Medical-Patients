import { useState } from "react";
import { Flex, Text, ThemeIcon, Button, Modal, Title } from "@mantine/core";
import {
  IconCarGarage,
  IconBrandYandex,
} from "@tabler/icons-react";

export const OrderTaxi = () => {
  const [opened, setOpened] = useState(false);
  const lat = 41.3111,
    lon = 69.2797;

  const openWithFallback = (appUrl: string, webUrl: string) => {
    const timeout = setTimeout(() => {
      window.open(webUrl, "_blank");
    }, 1500);

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = appUrl;
    document.body.appendChild(iframe);

    window.addEventListener("blur", () => clearTimeout(timeout), {
      once: true,
    });

    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 2000);
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        overlayProps={{ backgroundOpacity: 0.5, blur: 3 }}
        styles={{
          content: {
            backgroundColor: "#FFFBEA", // нежно-жёлтый фон
            borderRadius: "16px",
            padding: "24px",
          },
          header: { marginBottom: "12px" },
        }}
        title={
          <Flex align="center" gap="8px">
            <ThemeIcon radius="xl" size={32} bg="#FFD633">
              <IconCarGarage size={20} color="#000" />
            </ThemeIcon>
            <Title order={4} c="black">
              Выберите сервис такси
            </Title>
          </Flex>
        }
      >
        <Flex direction="column" gap="12px">
          <Button
            fullWidth
            radius="md"
            size="md"
            styles={{
              root: {
                backgroundColor: "#FFD633",
                color: "#000",
                fontWeight: 600,
              },
            }}
            onClick={() =>
              openWithFallback(
                `yandextaxi://route?end-lat=${lat}&end-lon=${lon}`,
                `https://play.google.com/store/apps/details?id=ru.yandex.taxi`
              )
            }
            leftSection={<IconBrandYandex size={20} color="#000" />}
          >
            Yandex Go UZ
          </Button>

          {/* Доп. кнопка для браузера */}
          <Button
            fullWidth
            radius="md"
            variant="outline"
            color="yellow"
            onClick={() => window.open("https://taxi.yandex.uz/", "_blank")}
            leftSection={<IconBrandYandex size={20} color="#000" />}
          >
            Открыть сайт
          </Button>
        </Flex>
      </Modal>

      {/* Карточка-триггер */}
      <Flex
        onClick={() => setOpened(true)}
        gap="12px"
        align="center"
        bg="white"
        miw="140px"
        wrap="wrap"
        p="12px"
        w="max-content"
        direction="column"
        justify="center"
        style={{ borderRadius: "12px", cursor: "pointer" }}
      >
        <ThemeIcon w="68px" h="68px" radius="100%" bg="#FEF9C3">
          <IconCarGarage size="38px" color="#CA8A04" />
        </ThemeIcon>
        <Flex direction="column" justify="center" align="center">
          <Text fw={400} fz="16px" lh="24px">
            Вызвать
          </Text>
          <Text c="#6B7280">такси</Text>
        </Flex>
      </Flex>
    </>
  );
};
