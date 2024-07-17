import { fetchData } from "@/api/api";
import { useDataStore } from "@/stores/DataStore";
import { useQuery } from "react-query";

export default function DataFetcher() {
  const { setData } = useDataStore();
  const { data, error, isLoading } = useQuery("fetchData", fetchData, {
    onSuccess: (data) => {
      setData(data);
    },
  });

  return null;
}
