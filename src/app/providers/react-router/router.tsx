import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { APP_PATHS } from "@/shared/constants/app-paths";
import { createBrowserRouter } from "react-router";

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
  ],
  {
    basename: "/orzu-medical",
  }
);
