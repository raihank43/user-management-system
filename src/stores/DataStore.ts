import { create } from "zustand";

interface State {
  data: any;
  setData: (data: any) => void;
}

export const useDataStore = create<State>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));
