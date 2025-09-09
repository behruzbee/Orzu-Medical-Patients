import { Flex, Text, ThemeIcon } from "@mantine/core";
import {
  IconBongFilled,
  IconClipboardListFilled,
  IconHomeFilled,
  IconMenu2,
  IconUserFilled,
} from "@tabler/icons-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const MobileNavbar = () => {
  const location = useLocation();

  const links = [
    {
      to: "/",
      icon: <IconHomeFilled size="20px" />,
      label: "Мой день",
    },
    {
      to: "/analyzes",
      icon: <IconBongFilled size="20px" />,
      label: "Анализы",
    },
    {
      to: "/prescriptions",
      icon: <IconClipboardListFilled size="20px" />,
      label: "Назначения",
    },
    {
      to: "/profile",
      icon: <IconUserFilled size="20px" />,
      label: "Профиль",
    },
    {
      to: "/more",
      icon: <IconMenu2 size="20px" />,
      label: "Ещё",
    },
  ];

  return (
    <Flex
      component="nav"
      pos="fixed"
      bottom="0"
      left="0"
      bg="#fff"
      w="100%"
      p="8px 12px"
      justify="space-between"
      style={{
        borderTop: "2px solid #E5E7EB",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
      }}
    >
      {links.map(({ to, icon, label }) => {
        const isActive = location.pathname === to;
        return (
          <Flex
            key={to}
            direction="column"
            align="center"
            justify="center"
            component={Link}
            to={to}
            style={{ textDecoration: "none" }}
          >
            <ThemeIcon
              w={43}
              h={43}
              radius="100%"
              bg={isActive ? "#DCFCE7" : "transparent"}
            >
              {icon &&
                React.cloneElement(icon, {
                  color: isActive ? "#028D00" : "#9CA3AF",
                })}
            </ThemeIcon>
            <Text size="15px" mt="4px" c={isActive ? "#028D00" : "#9CA3AF"}>
              {label}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
