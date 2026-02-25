import type { Icon } from "@tabler/icons-react";
import type { ComponentType } from "react";

export interface IRoutes {
  title?: string;
  url: string;
  icon?: Icon;
  Component: ComponentType;
}
