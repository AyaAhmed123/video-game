import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './Components/NavBar'
import GameGrid from './Components/GameGrid'
import GenreList from './Components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './Components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'

export interface GameQuery {
  genre: Genre,
  platform: Platform
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"" aside main"`
        }}
        templateColumns={{
          base: '1fr',
          lg: '220px 1fr'
        }}
      >
        <GridItem area={'nav'}>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'} paddingX={2}>
            <GenreList onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <PlatformSelector onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
