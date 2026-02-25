import { Navigate, Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";
import { useToken } from "@/zustand/token.store";

export default function AuthLayout() {
  const token = useToken((s) => s.token);
  if (token) {
    return <Navigate to={"/dashboard"} replace />;
  }
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <Outlet />
      <Toaster />
    </div>
  );
}
