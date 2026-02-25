import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ITokenState {
  token: string | null;
  setToken: (data: string) => void;
}

export const useToken = create<ITokenState>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        setToken: (data: string) => set(() => ({ token: data })),
      }),
      { name: "access-token" },
    ),
  ),
);
