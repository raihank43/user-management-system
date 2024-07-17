import { useSortOrderUserListStore } from "@/stores/SortOrderUserListStore";
import { useUserListStore } from "@/stores/UserListStore";
import { useQuery } from "react-query";
import { fetchSorOrdertListUser } from "@/api/api";

export default function SortOrderUserListFetcher() {
  const { setData, setLoading } = useUserListStore();
  const { sortBy, order } = useSortOrderUserListStore();
  const { data, error, isLoading } = useQuery(
    ["sortOrderListUser", sortBy, order], // Pass sortBy and order as part of the query key
    () => fetchSorOrdertListUser(sortBy, order), // Pass sortBy and order to the fetch function
    {
      onSuccess: (data) => {
        setData(data.users);
      },
      onError: (error) => {
        console.error("Error fetching data:", error);
      },
      onSettled: () => {
        setLoading(false);
      },
    }
  );
  return null;
}
