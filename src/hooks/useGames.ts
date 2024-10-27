import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchData } from "../services/client-api";

import ms from "ms";
import { Platform } from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
const apiClient = new APIClient<Game>("/games");
export interface Game {
  id: number;
  background_image: string;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchData<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sort,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      // check if response has next so increase by 1
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

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
