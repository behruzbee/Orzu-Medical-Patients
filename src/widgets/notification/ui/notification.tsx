import { Box, Flex, Text, ThemeIcon } from "@mantine/core";
import { IconBellFilled, IconCalendarWeek, IconClockHour3Filled } from "@tabler/icons-react";

export const PNotification = () => {
  return (
    <Box p="24px" bdrs="16px" bg="#fff" mt="24px">
      <Flex align="center" columnGap="2px" mb="16px">
        <IconBellFilled fontSize="24px" color="#4F80D7" />
        <Text size="18px">Напоминания</Text>
      </Flex>

      <Flex direction="column" rowGap="12px">
        <Flex
          gap="12px"
          align="center"
          bg="#EFF6FF"
          p="12px"
          style={{ borderRadius: "12px" }}
        >
          <ThemeIcon w={48} h={48} radius="100%" bg={"#DBEAFE"}>
            <IconClockHour3Filled color="#2563EB" />
          </ThemeIcon>
          <Box>
            <Text fw={600} fz="16px" lh="24px">
              Прием лекарств
            </Text>
            <Text c="#6B7280">Через 2 часа в 16:00</Text>
          </Box>
        </Flex>

        <Flex
          gap="12px"
          align="center"
          bg="#FFF7ED"
          p="12px"
          style={{ borderRadius: "12px" }}
        >
          <ThemeIcon w={48} h={48} radius="100%" bg={"#FFEDD5"}>
            <IconCalendarWeek color="#EA580C" />
          </ThemeIcon>
          <Box>
            <Text fw={600} fz="16px" lh="24px">
              Следующий визит
            </Text>
            <Text c="#6B7280">Завтра в 10:00</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
