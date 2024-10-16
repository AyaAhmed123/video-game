import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchData } from "../services/client-api";

import { Platform } from "../hooks/usePlatforms";
const apiClient = new APIClient<Game>("/games");
export interface Game {
  id: number;
  background_image: string;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchData<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sort,
          search: gameQuery.search,
        },
      }),
  });
// {
//   // as geners is query paramter and it is optional if send it will filter games with this genre
// return useData<Game>('games',{params:{
//   genres:gameQuery.genre?.id,
//   parent_platforms:gameQuery.platform?.id,
//   ordering:gameQuery.sort,
//   search:gameQuery.search
// }},[gameQuery]);
// }

export default useGames;
