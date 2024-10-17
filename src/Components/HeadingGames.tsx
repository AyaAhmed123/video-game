import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
interface Props {
  gameQuery: GameQuery;
}
const HeadingGames = ({ gameQuery }: Props) => {
  const { data: geners } = useGenres();
  const genre = geners?.results.find((g) => g.id == gameQuery.genreId);
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id == gameQuery.platformId);
  const header = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading>{header}</Heading>;
};

export default HeadingGames;
