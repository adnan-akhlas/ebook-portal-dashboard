import { api } from "@/lib/axios";

export async function loginMutation<T>(data: {
  email: string;
  password: string;
}): Promise<T> {
  return api.post("/users/login", data);
}

export async function registerMutation<T>(data: {
  name: string;
  email: string;
  password: string;
}): Promise<T> {
  return api.post("/users/register", data);
}
