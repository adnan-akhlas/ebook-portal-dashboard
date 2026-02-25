import LoginPage from "@/pages/LoginPage";
import type { IRoutes } from "@/types/routes.types";
import { IconDashboard } from "@tabler/icons-react";

export const dashboardRoutes: IRoutes[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconDashboard,
    Component: LoginPage,
  },
];
