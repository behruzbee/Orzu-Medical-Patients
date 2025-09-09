import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { APP_PATHS } from "@/shared/constants/app-paths";
import { PageHeader } from "@/widgets/header";
import { MobileNavbar } from "@/widgets/mobile-menu";
import { AnalyzesPage } from "@/pages/analyzes";
import { Container } from "@mantine/core";

export const router = createBrowserRouter(
  [
    {
      path: APP_PATHS.HOME_PAGE,
      element: <HomePage />,
    },
    {
      path: APP_PATHS.LOGIN_PAGE,
      element: <LoginPage />,
    },
    {
      path: APP_PATHS.ANALYZES_PAGE,
      element: <AnalyzesPage />,
    },
    {
      path: APP_PATHS.PRESCRIPTIONS,
      element: (
        <>
          <PageHeader header="Назначенные процедуры" />
          <Container pb="110px" mih="100vh" bg="#F3F4F6" pt="4px">
            <div>📋 Назначения</div>
          </Container>
          <MobileNavbar />
        </>
      ),
    },
    {
      path: APP_PATHS.PROFILE,
      element: (
        <>
          <PageHeader header="Профиль" />
          <Container pb="110px" mih="100vh" bg="#F3F4F6" pt="4px">
            <div>👤 Профиль</div>
          </Container>
          <MobileNavbar />
        </>
      ),
    },
    {
      path: APP_PATHS.MORE,
      element: (
        <>
          <PageHeader header="Ещё" />
          <Container pb="110px" mih="100vh" bg="#F3F4F6" pt="4px">
            <div>➕ Ещё</div>
          </Container>
          <MobileNavbar />
        </>
      ),
    },
  ],
  {
    basename: "/orzu-medical",
  }
);
