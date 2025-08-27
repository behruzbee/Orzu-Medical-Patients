import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  TextInput,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconLogin2 } from "@tabler/icons-react";
import patientIdIcon from "@/shared/assets/icons/patient-id-icon.svg";
import cn from "../styles/login-form.styles.module.scss";
import { APP_PATHS } from "@/shared/constants/app-paths";
import { useState } from "react";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      navigate(APP_PATHS.HOME_PAGE, { replace: true });
    }, 1500);
  }

  return (
    <Card
      p="25px"
      shadow="md"
      withBorder
      component="form"
      className={cn.loginForm}
      onSubmit={handleSubmit}
    >
      <Flex direction="column">
        <Title order={6} fw="600" display="flex" mb="8px">
          <Image mr="12px" w="22px" fit="contain" src={patientIdIcon} />
          Идентификатор пациента
        </Title>
        <Box mb="16px">
          <TextInput
            label="Patient ID"
            defaultValue="992134234"
            withAsterisk={false}
            styles={{
              label: { marginBottom: "8px", fontSize: "14px", fontWeight: 400 },
              input: {
                padding: "12px 16px",
                fontSize: "14px",
                height: "44px",
                borderColor: "#D1D5DB",
              },
            }}
            radius="12px"
            type="number"
            required
            placeholder="Введите идентификатор из бедж"
          />
        </Box>
        <Button loading={isLoading} type="submit" leftSection={<IconLogin2 />}>
          Войти в профиль
        </Button>
      </Flex>
    </Card>
  );
};
