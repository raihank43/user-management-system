import { fetchSearchListUser } from "@/api/api";
import { useSearchUserListStore } from "@/stores/SearchUserListStore";
import { useUserListStore } from "@/stores/UserListStore";
import { useQuery } from "react-query";

export default function SearchUserListFetcher() {
  const { setData, setLoading } = useUserListStore();
  const { query } = useSearchUserListStore();
  const { data, error, isLoading } = useQuery(
    ["searchListUser", query], // Pass query as part of the query key
    () => fetchSearchListUser(query), // Pass query to the fetch function
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
