import { MainHeader } from "@/widgets/header";
import { MyQrCode } from "@/widgets/my-qr-code";
import { Container, Flex } from "@mantine/core";
import { ProcedureSchedule } from "./procedure-schedule";
import { FastActions } from "@/widgets/fast-actions";
import { ExchangeRates } from "@/widgets/exchange-rates";
import { Weather } from "@/widgets/weather";
import { PNotification } from "@/widgets/notification";
import { MobileNavbar } from "@/widgets/mobile-menu";

export const HomePage = () => {
  return (
    <>
      <MainHeader />
      <Container pb="110px" mih="100vh" bg="#F3F4F6" pt="4px">
        <MyQrCode />
        <ProcedureSchedule />
        <FastActions />
        <Flex mt="24px" columnGap="12px">
          <ExchangeRates />
          <Weather />
        </Flex>
        <PNotification />
      </Container>
      <MobileNavbar />
    </>
  );
};
