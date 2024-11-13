import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import React from "react";
import IconList from "./IconList";
import CriticScore from "./CriticScore";
import getImageMinimized from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getImageMinimized(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <IconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>
            {game.name}
            <Emoji rating={game.rating_top} />
          </Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
