import { fetchCurrentUser } from "@/api/api";
import { useCurrentLogUserStore } from "@/stores/CurrentLogUserStore";
import { useQuery } from "react-query";

export default function CurrentLogUserFetcher() {
  const { setData, setLoading } = useCurrentLogUserStore();
  const { data, error, isLoading } = useQuery(
    "fetchCurrentUser",
    fetchCurrentUser,
    {
      onSuccess: (data) => {
        setData(data);
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
