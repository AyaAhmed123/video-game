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

const useGames = () => {
return useData<Game>('games');
}

export default useGames