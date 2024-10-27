import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./Components/SortSelector";
import HeadingGames from "./Components/HeadingGames";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort: string;
  search: string;
}

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"" aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
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
    </div>
  );
}

export default App;
