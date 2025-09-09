import { Flex, Text, ThemeIcon } from "@mantine/core";
import { IconPhoneFilled } from "@tabler/icons-react";

export const CallingButton = () => {
  const phoneNumber = "+998901234567"; // 🔹 замени на номер регистратуры

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Flex
      onClick={handleCall}
      gap="12px"
      align="center"
      bg="white"
      wrap="wrap"
      p="12px"
      w="max-content"
      miw="160px"
      direction="column"
      justify="center"
      style={{
        borderRadius: "12px",
        cursor: "pointer", // 👆 курсор-рука
      }}
    >
      <ThemeIcon w="68px" h="68px" radius="100%" bg="#DCFCE7">
        <IconPhoneFilled size="32px" color="#16A34A" />
      </ThemeIcon>
      <Flex direction="column" justify="center" align="center">
        <Text fw={400} fz="16px" lh="24px">
          Позвонить
        </Text>
        <Text c="#6B7280">в регистратуру</Text>
      </Flex>
    </Flex>
  );
};
