import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSortOrderUserListStore } from "@/stores/SortOrderUserListStore";
import { FilterIcon } from "lucide-react";

export function SortButton() {
  const { setSortBy, sortBy } = useSortOrderUserListStore();
  return (
    <Select value={sortBy} onValueChange={setSortBy}>
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder={<FilterIcon className="w-5 h-5 text-blue-600" />} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Urutkan Berdasarkan</SelectLabel>
          <SelectItem value="username">Username</SelectItem>
          <SelectItem value="gender">Jenis Kelamin</SelectItem>
          <SelectItem value="password">Password</SelectItem>
          <SelectItem value="age">Usia</SelectItem>
          <SelectItem value="firstName">First Name</SelectItem>
          <SelectItem value="lastName">Last Name</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
