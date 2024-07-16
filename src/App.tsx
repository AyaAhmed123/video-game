import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './Components/NavBar'
import GameGrid from './Components/GameGrid'

function App() {

  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"" aside main"`
        }}
      >
        <GridItem  area={'nav'}>
          <NavBar/>
        </GridItem>
        <Show above='lg'>
          <GridItem bg='blue.300' area={'aside'}>
            Aside
          </GridItem>
        </Show>
        <GridItem bg='green.300' area={'main'}>
          <GameGrid/>
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
