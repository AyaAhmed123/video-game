import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const HeadingGames = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenre = useGameQueryStore((s) => s.setGenreId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatform = useGameQueryStore((s) => s.setPlatformId);

  const genre = useGenre(selectedGenreId);
  const platform = usePlatform(selectedPlatformId);
  const header = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading>{header}</Heading>;
};

export default HeadingGames;
