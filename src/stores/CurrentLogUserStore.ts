import { create } from "zustand";

interface currentLogUserState {
  data: userListInterface;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setData: (data: userListInterface) => void;
}

export const useCurrentLogUserStore = create<currentLogUserState>((set) => ({
  data: {} as userListInterface,
  loading: true,
  setLoading: (loading) => set({ loading }),
  setData: (data) => set({ data }),
}));
