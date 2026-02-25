import AuthLayout from "@/components/layouts/AuthLayout";
import DashboardLayout from "@/components/layouts/Dashboard/DashboardLayout";
import { authRoutes } from "@/constant/auth.constant";
import { dashboardRoutes } from "@/constant/dashboard.constant";
import RouterHandler from "@/router/RouteHandler";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter } from "react-router";

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
    children: [...generateRoutes(dashboardRoutes)],
  },
]);
