import { GameQuery } from '../App';
import useData from './useData';
export interface Platform {
  id: number,
  slug: string,
  name: string
}

export interface Game {
  id: number,
  background_image: string,
  name: string,
  parent_platforms: { platform: Platform }[],
  metacritic: number
}

const useGames = (gameQuery:GameQuery) => {
  // as geners is query paramter and it is optional if send it will filter games with this genre
return useData<Game>('games',{params:{
  genres:gameQuery.genre?.id,
  parent_platforms:gameQuery.platform?.id,
  ordering:gameQuery.sort,
  search:gameQuery.search
}},[gameQuery]);
}

export default useGames