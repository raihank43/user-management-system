import { create } from "zustand";

interface State {
  data: any;
  setData: (data: any) => void;
  increment: () => void;
}

export const useTestStore = create<State>((set) => ({
  data: null,
  setData: (data) => set({ data }),
  increment: () => set((state) => ({ data: state.data + 1 })),
}));
