import useData from './useData';
import { Genre } from './useGenres';
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

const useGames = (selectedGenre:Genre|null) => {
  // as geners is query paramter and it is optional if send it filter games with this genre
return useData<Game>('games',{params:{genres:selectedGenre?.id}},[selectedGenre?.id]);
}

export default useGames