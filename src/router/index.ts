import AuthLayout from "@/components/layouts/AuthLayout";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router";
import RouterHandler from "@/router/RouteHandler";
import DashboardLayout from "@/components/layouts/Dashboard/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RouterHandler,
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [],
  },
]);
