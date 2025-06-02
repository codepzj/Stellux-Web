import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CommentSettingVO } from "@/types/config";

interface ConfigState {
  blogSearchOpen: boolean;
  commentSetting: CommentSettingVO;
  setBlogSearchOpen: (blogSearchOpen: boolean) => void;
  setCommentSetting: (commentSetting: CommentSettingVO) => void;
}

const useConfigStore = create<ConfigState>()(persist((set) => ({
  blogSearchOpen: false,
  commentSetting: {
    allow_comment_type: "forbidden",
    env_id: "",
  },
  setBlogSearchOpen: (blogSearchOpen: boolean) => set({ blogSearchOpen }),
  setCommentSetting: (commentSetting: CommentSettingVO) => set({ commentSetting }),
}), {
  name: "config",
  storage: createJSONStorage(() => localStorage),
  partialize: (state) => ({ commentSetting: state.commentSetting }),
},));

export default useConfigStore;