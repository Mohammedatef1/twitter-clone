import { decodeAction } from "next/dist/server/app-render/entry-base";
import { create } from "zustand";

interface RegisterStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useRegisterModal = create<RegisterStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useRegisterModal;
