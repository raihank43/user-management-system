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
import { ListOrderedIcon } from "lucide-react";

export function OrderButton() {
  const { order, setOrder } = useSortOrderUserListStore();
  return (
    <Select value={order} onValueChange={setOrder}>
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder={<ListOrderedIcon className="w-5 h-5" />} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Order By</SelectLabel>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="desc">Descending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
