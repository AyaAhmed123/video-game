import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

export const GameDetailsPage = () => {
  const { slug } = useParams();
  // slug! to say that it will never be null it always has value
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <Text> {game.description_raw}</Text>
    </>
  );
};
