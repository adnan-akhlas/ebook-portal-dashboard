import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Navigate, Outlet } from "react-router";
import { AppSidebar } from "@/components/layouts/Dashboard/app-sidebar";
import { SiteHeader } from "@/components/layouts/Dashboard/site-header";
import { useToken } from "@/zustand/token.store";

export default function DashboardLayout() {
  const token = useToken((s) => s.token);
  if (!token) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="p-4 md:p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
