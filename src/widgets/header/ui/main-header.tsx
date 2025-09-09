import { Avatar, Box, Flex, Text, Title } from "@mantine/core";
import { IconBellFilled } from "@tabler/icons-react";

import patientAvatar from "@/shared/assets/images/patient-avatar.png";

export const MainHeader = () => {
  return (
    <Flex
      p="16px"
      justify="space-between"
      align="center"
      bg="white"
      w="100%"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0px 2px 4px rgba(17, 24, 39, 0.1)", // мягкая тень
      }}
    >
      <Flex align="center">
        <Box mr="12px">
          <Avatar w="40px" h="40px" src={patientAvatar} alt="Avatar" />
        </Box>
        <Box>
          <Title
            order={6}
            styles={{ root: { fontSize: "20px", lineHeight: "28px" } }}
          >
            Orzu Medical
          </Title>
          <Text c="#6B7280" styles={{ root: { fontSize: "14px" } }}>
            Добро пожаловать, Юнусбек
          </Text>
        </Box>
      </Flex>
      <Flex
        align="center"
        justify="center"
        w="40px"
        h="40px"
        style={{ cursor: "pointer" }}
      >
        <IconBellFilled color="#9CA3AF" />
      </Flex>
    </Flex>
  );
};
