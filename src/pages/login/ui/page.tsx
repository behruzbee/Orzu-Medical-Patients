import { Box, Container, Divider, Text, Title } from "@mantine/core";
import { LoginForm, LoginScan } from "@/features/login";
import { BrandLogo } from "@/shared/ui/logo";

export const LoginPage = () => {
  return (
    <>
      <Container py="lg">
        <Box mt="42px" mb="19px">
          <BrandLogo height="94px" />
        </Box>
        <Title order={3} mb="7px" lh="32px" fs="2x" fw="bold" ta="center">
          Orzu Medical
        </Title>
        <Text fs="14px" c="#4B5563" ta="center">
          Добро пожаловать в Orzu Medical – ваш персональный медицинский портал
        </Text>
        <Box mt="36px">
          <LoginForm />
        </Box>
        <Divider
          label="ИЛИ"
          fw={900}
          labelPosition="center"
          my="lg"
        />
        <Box>
          <LoginScan />
        </Box>
      </Container>
    </>
  );
};
