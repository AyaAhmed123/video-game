import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchData } from "../services/client-api";
import platforms from "../data/platforms";
import ms from "ms";
import { Platform } from "../entities/Platform";
const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
