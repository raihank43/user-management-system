import { fetchListUser } from "@/api/api";
import { useUserListStore } from "@/stores/UserListStore";
import { useQuery } from "react-query";

export default function UserListFetcher() {
  const { setData, setLoading } = useUserListStore();
  const { data, error, isLoading } = useQuery("fetchListUser", fetchListUser, {
    onSuccess: (data) => {
      setData(data.users);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
    onSettled: () => {
      setLoading(false);
    },
  });
  return null;
}
