import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/client-api";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get_by_id(slug),
  });
export default useGame;
