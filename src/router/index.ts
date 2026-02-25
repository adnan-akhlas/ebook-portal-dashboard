import AuthLayout from "@/components/layouts/AuthLayout";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router";
import RouterHandler from "@/router/RouteHandler";
import DashboardLayout from "@/components/layouts/Dashboard/DashboardLayout";
import { generateRoutes } from "@/utils/generateRoutes";
import { authRoutes } from "@/constant/auth.constant";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RouterHandler,
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [...generateRoutes(authRoutes)],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [],
  },
]);
