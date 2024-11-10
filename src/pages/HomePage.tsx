import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../Components/GameGrid";
import GenreList from "../Components/GenreList";
import HeadingGames from "../Components/HeadingGames";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} paddingX={2}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HeadingGames />
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector />
          </Box>
          <Box>
            <SortSelector></SortSelector>
          </Box>
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
