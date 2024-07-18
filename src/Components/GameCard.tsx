import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import IconList from './IconList'
import CriticScore from './CriticScore'
import getImageMinimized from '../services/image-url'

interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
   <Card borderRadius={10} overflow='hidden'>
    <Image src={getImageMinimized(game.background_image)}/>
    <CardBody>
        <Heading  fontSize='2xl' >{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <IconList platforms={game.parent_platforms.map(p=>p.platform)}/>
          <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
    </CardBody>
   </Card>
  )
}

export default GameCard