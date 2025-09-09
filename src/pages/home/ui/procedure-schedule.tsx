import { useRef, useEffect } from "react";
import { Box, Flex, Text, ThemeIcon } from "@mantine/core";
import { IconCheck, IconClockHour3Filled, IconX } from "@tabler/icons-react";

const procedures = [
  {
    title: "Анализ крови",
    time: "09:00",
    status: "Завершено",
    color: "#16A34A",
    bg: "#F0FDF4",
    iconBg: "#DCFCE7",
    icon: <IconCheck color="#16A34A" />,
  },
  {
    title: "Массаж",
    time: "14:00",
    status: "Пропущено",
    color: "#991B1B",
    bg: "#FEE2E2",
    iconBg: "#FECACA",
    icon: <IconX color="#991B1B" />,
  },
  {
    title: "ЭКГ",
    time: "16:00",
    status: "Завершено",
    color: "#16A34A",
    bg: "#F0FDF4",
    iconBg: "#DCFCE7",
    icon: <IconCheck color="#16A34A" />,
  },
  {
    title: "УЗИ",
    time: "14:30",
    status: "Следует",
    color: "#2563EB",
    bg: "#EFF6FF",
    iconBg: "#DBEAFE",
    icon: <IconClockHour3Filled color="#2563EB" />,
  },
  {
    title: "Консультация",
    time: "17:30",
    status: "Ожидается",
    color: "#9CA3AF",
    bg: "#F9FAFB",
    iconBg: "#F3F4F6",
    icon: <IconClockHour3Filled color="#9CA3AF" />,
  },
];

export const ProcedureSchedule = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && targetRef.current) {
      containerRef.current.scrollTo({
        top: targetRef.current.offsetTop - containerRef.current.offsetTop - 20,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <Flex bdrs="16px" direction="column" bg="white" p="16px" mt="16px" gap="12px">
      <Text fz="20px" fw={600} lh="28px">
        График процедуры
      </Text>

      <Flex
        ref={containerRef}
        direction="column"
        gap="12px"
        style={{
          maxHeight: "260px",
          overflowY: "auto",
        }}
      >
        {procedures.map((p, i) => {
          const isTarget = p.status === "Следует";

          return (
            <Flex
              key={i}
              ref={isTarget ? targetRef : null}
              gap="12px"
              align="center"
              bg={p.bg}
              p="12px"
              style={{ borderRadius: "12px" }}
            >
              <ThemeIcon w={48} h={48} radius="100%" bg={p.iconBg}>
                {p.icon}
              </ThemeIcon>
              <Box>
                <Text fw={600} fz="16px" lh="24px">
                  {p.title}
                </Text>
                <Text c="#6B7280">
                  {p.time} – {p.status}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
