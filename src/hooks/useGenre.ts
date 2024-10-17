import useGenres from "./useGenres";

const useGenre = (genreId?: number) => {
  const { data: geners } = useGenres();
  return geners?.results.find((g) => g.id == genreId);
};

export default useGenre;
