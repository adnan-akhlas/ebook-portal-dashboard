import type { IRoutes } from "@/types/routes.types";

export function generateRoutes(routes: IRoutes[]) {
  const router = routes.flatMap((route) => ({
    path: route.url,
    Component: route.Component,
  }));
  return router;
}
