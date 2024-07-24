import { GameQuery } from '../App'
import { Heading } from '@chakra-ui/react'
interface Props{
    gameQuery:GameQuery
}
const HeadingGames = ({gameQuery}:Props) => {
    const header=`${gameQuery.platform?.name||""} ${gameQuery.genre?.name||""} Games`
  return (
    <Heading>{header}</Heading>
  )
}

export default HeadingGames