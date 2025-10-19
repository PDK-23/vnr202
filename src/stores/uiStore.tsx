import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useUiStore = create<{
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  switcher: boolean;
  revalidate: () => void;
}>()(
  persist(
    (set, get) => ({
      collapsed: false,
      switcher: false,
      revalidate: () => {
        set({ switcher: !get().switcher });
      },
      setCollapsed: (value: boolean) => {
        set({ collapsed: value });
      },
    }),
    {
      name: "ui-config",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUiStore;
