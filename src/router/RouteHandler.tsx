import { Navigate } from "react-router";

export default function RouterHandler() {
  return <Navigate to={"/auth/login"} replace />;
}
