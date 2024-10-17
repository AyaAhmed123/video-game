import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
interface Props {
  gameQuery: GameQuery;
}
const HeadingGames = ({ gameQuery }: Props) => {
  const { data: geners } = useGenres();
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  const header = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading>{header}</Heading>;
};

export default HeadingGames;
