import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ITokenState {
  token: string | null;
  setToken: (data: string) => void;
  unsetToken: () => void;
}

export const useToken = create<ITokenState>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        setToken: (data: string) => set(() => ({ token: data })),
        unsetToken: () => set(() => ({ token: null })),
      }),
      { name: "access-token" },
    ),
  ),
);
