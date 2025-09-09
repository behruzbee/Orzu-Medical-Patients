import { CallingButton } from "@/features/calling";
import { ConnectWifi } from "@/features/connect-wifi";
import { OrderTaxi } from "@/features/order-taxi/ui/order-taxi";
import { Flex, Text } from "@mantine/core";

export const FastActions = () => {
  return (
    <Flex mt="24px" direction="column" align="start" justify="center">
      <Text
        styles={{ root: { fontSize: "20px", lineHeight: "28px" } }}
        mb="16px"
      >
        Быстрые действия
      </Text>
      <Flex
        styles={{ root: { overflow: "auto" } }}
        columnGap="md"
        w="100%"
        justify="space-between"
        pb="10px"
        align="center"
      >
        <CallingButton />
        <ConnectWifi />
        <OrderTaxi />
      </Flex>
    </Flex>
  );
};
