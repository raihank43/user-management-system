import { create } from "zustand";

interface userListState {
  data: userListInterface[];
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setData: (data: userListInterface[]) => void;
}

export const useUserListStore = create<userListState>((set) => ({
  data: [],
  loading: true,
  setLoading: (loading) => set({ loading }),
  setData: (data) => set({ data }),
}));
