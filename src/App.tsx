import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './Components/NavBar'
import GameGrid from './Components/GameGrid'
import GenreList from './Components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'

function App() {
const[selectedGenre,setSelectedGenre]=useState<Genre|null>(null);
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"" aside main"`
        }}
        templateColumns={{
          base:'1fr',
          lg:'200px 1fr'
        }}
      >
        <GridItem  area={'nav'}>
          <NavBar/>
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'} paddingX={2}>
            <GenreList onSelectedGenre={(genre)=>setSelectedGenre(genre)}/>
          </GridItem>
        </Show>
        <GridItem  area={'main'}>
          <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
