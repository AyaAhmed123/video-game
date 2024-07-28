import { Button, Heading, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getImageMinimized from '../services/image-url';
interface Props{
  onSelectedGenre:(genre:Genre)=>void,
  selectedGenre:Genre|null
}
const GenreList = ({onSelectedGenre,selectedGenre}:Props) => {
    const{data,error,isLoading}=useGenres();
    if(error)return null;
    if(isLoading)return <Spinner></Spinner>
  return (
  <List>
 <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>

{data.map(genre=><ListItem paddingY={1} key={genre.id}>
 <HStack>

  <Image borderRadius={10} boxSize={10} src={getImageMinimized(genre.image_background)}/>
  <Button whiteSpace="normal" textAlign="left" fontWeight={selectedGenre?.id==genre.id?"bold":""} onClick={()=>onSelectedGenre(genre)} variant='link' fontSize='lg'> {genre.name}</Button>
  </HStack> 
  </ListItem>) }  </List>
  )
}

export default GenreList