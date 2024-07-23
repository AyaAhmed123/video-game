import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getImageMinimized from '../services/image-url';
interface Props{
  onSelectedGenre:(genre:Genre)=>void
}
const GenreList = ({onSelectedGenre}:Props) => {
    const{data,error,isLoading}=useGenres();
    if(error)return;
    if(isLoading)return <Spinner></Spinner>
  return (
  <List>
{data.map(genre=><ListItem paddingY={1} key={genre.id}>
 <HStack>
  <Image borderRadius={10} boxSize={10} src={getImageMinimized(genre.image_background)}/>
  <Button onClick={()=>onSelectedGenre(genre)} variant='link' fontSize='lg'> {genre.name}</Button>
  </HStack> 
  </ListItem>) }  </List>
  )
}

export default GenreList