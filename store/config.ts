import { create } from "zustand";

interface ConfigState {
  blogSearchOpen: boolean;
  setBlogSearchOpen: (blogSearchOpen: boolean) => void;
}

const useConfigStore = create<ConfigState>()((set) => ({
  blogSearchOpen: false,
  setBlogSearchOpen: (blogSearchOpen: boolean) => set({ blogSearchOpen }),
}));

export default useConfigStore;