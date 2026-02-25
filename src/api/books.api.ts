import { api } from "@/lib/axios";

export async function booksQuery() {
  return api.get("/books");
}

export async function bookMutation<T>(data: FormData): Promise<T> {
  return api.post("/books", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
