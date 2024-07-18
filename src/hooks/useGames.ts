import React, { useEffect, useState } from 'react'
import clientApi from '../services/client-api';
import { CanceledError } from 'axios';
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
interface FetchGame {
  count: number,
  results: Game[]
}
const useGames = () => {
  const controller = new AbortController();
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    clientApi.get<FetchGame>("games")
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message); setIsLoading(false);
      });
    return () => controller.abort();
  }, [])

  return { games, error ,isLoading};
}

export default useGames