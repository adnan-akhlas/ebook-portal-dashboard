import BooksPage from "@/pages/BooksPage";
import type { IRoutes } from "@/types/routes.types";
import { IconLayoutDashboard } from "@tabler/icons-react";

export const dashboardRoutes: IRoutes[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconLayoutDashboard,
    Component: BooksPage,
  },
];
