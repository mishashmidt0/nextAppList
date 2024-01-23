import { create } from "zustand";

export type ModalType = "item";

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  itemId?: number;
  onOpen: (type: ModalType, itemId: number) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  data: {},
  onOpen: (type: ModalType, itemId: number) => {
    set({ isOpen: true, type, itemId });
  },
  onClose: () => {
    set({ isOpen: false, type: null });
  },
}));
