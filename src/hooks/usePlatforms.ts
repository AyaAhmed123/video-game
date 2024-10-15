import { useQuery } from "@tanstack/react-query";
import { FetchData } from "../services/client-api";
import apiClient from "../services/client-api";
import platforms from "../data/platforms";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<FetchData<Platform>>("/platforms/lists/parents")
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
