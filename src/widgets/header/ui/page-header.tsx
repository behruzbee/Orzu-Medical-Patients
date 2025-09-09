import { APP_PATHS } from "@/shared/constants/app-paths";
import { Flex, Text } from "@mantine/core";
import { IconArrowLeft, IconBellFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  header: string;
}

export const PageHeader = ({ header }: PageHeaderProps) => {
  const navigate = useNavigate();

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
      <Flex align="center" onClick={() => navigate(APP_PATHS.HOME_PAGE)}>
        <IconArrowLeft />
      </Flex>
      <Text c="#111827" styles={{ root: { fontSize: "20px" } }}>
        {header}
      </Text>
      <Flex
        pt="5px"
        align="center"
        justify="center"
        w="22px"
        h="22px"
        style={{ cursor: "pointer" }}
      >
        <IconBellFilled color="#000000" />
      </Flex>
    </Flex>
  );
};
