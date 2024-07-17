import { create } from "zustand";

interface updateDataUserState {
  data: userListInterface;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setData: (data: userListInterface) => void;
}

export const useUpdateDataUserStore = create<updateDataUserState>((set) => ({
  data: {} as userListInterface,
  loading: true,
  setLoading: (loading) => set({ loading }),
  setData: (data) => set({ data }),
}));
