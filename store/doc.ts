import { create } from "zustand";
import { DocTreeItem } from "@/types/doctree";

interface DocTreeState {
  doctree: DocTreeItem[];
  docId: string;
  docTitle: string;
  docThumbnail: string;
  setDoctree: (docId: string, doctree: DocTreeItem[]) => void;
  setDocTitle: (docTitle: string) => void;
  setDocThumbnail: (docThumbnail: string) => void;
}

const useDocStore = create<DocTreeState>()((set) => ({
  doctree: [],
  docId: "",
  docTitle: "",
  docThumbnail: "",
  setDoctree: (docId: string, doctree: DocTreeItem[]) =>
    set({ docId, doctree }),
  setDocTitle: (docTitle: string) => set({ docTitle }),
  setDocThumbnail: (docThumbnail: string) => set({ docThumbnail }),
}));

export default useDocStore;
