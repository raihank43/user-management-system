import { create } from "zustand";

interface userListState {
  query: string;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setQuery: (data: string) => void;
}
export const useSearchUserListStore = create<userListState>((set) => ({
  query: "",
  loading: true,
  setLoading: (loading) => set({ loading }),
  setQuery: (query) => set({ query }),
}));
