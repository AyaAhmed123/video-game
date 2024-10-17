import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchData } from "../services/client-api";
import ms from "ms";
const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialsData: genres,
  });

export default useGenres;
