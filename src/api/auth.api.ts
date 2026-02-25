import { api } from "@/lib/axios";

export async function loginMutation<T>(data: {
  email: string;
  password: string;
}): Promise<T> {
  return api.post("/users/login", data);
}
