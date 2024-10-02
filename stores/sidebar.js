import { create } from "zustand";

export const useSideStore = create((set) => ({
    isOpen: true,
    setISOpen: (state) => {
        set({ isOpen: state });
    }
}))