import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import type { IRoutes } from "@/types/routes.types";

export const authRoutes: IRoutes[] = [
  {
    url: "/auth/login",
    Component: LoginPage,
  },
  {
    url: "/auth/register",
    Component: RegisterPage,
  },
];
