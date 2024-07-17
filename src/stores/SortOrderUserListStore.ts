import { create } from "zustand";

interface userListState {
  sortBy: string;
  order: string;
  setSortBy: (sortBy: string) => void;
  setOrder: (order: string) => void;
}

export const useSortOrderUserListStore = create<userListState>((set) => ({
  sortBy: "",
  order: "asc",
  setSortBy: (sortBy) => set({ sortBy }),
  setOrder: (order) => set({ order }),
}));
