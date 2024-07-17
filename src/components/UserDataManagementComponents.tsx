"use client";
import { Input } from "./ui/input";
import { SortButton } from "./SortButton";
import { OrderButton } from "./OrderButton";
import { useSearchUserListStore } from "@/stores/SearchUserListStore";
export default function UserDataManagementComponents() {
  const { setQuery, query } = useSearchUserListStore();
  return (
    <div className="flex p-6 gap-3 ml-32">
      <Input
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></Input>
      <div className="flex">
        <SortButton />
        <OrderButton />
      </div>
    </div>
  );
}
