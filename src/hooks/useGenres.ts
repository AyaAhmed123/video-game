import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/client-api";
import { FetchData } from "./useData";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchData<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialsData: { count: genres.length, results: genres },
  });

export default useGenres;
