import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getImageMinimized from '../services/image-url';

const GenreList = () => {
    const{data,error,isLoading}=useGenres();
    if(error)return;
    if(isLoading)return <Spinner></Spinner>
  return (
  <List>
{data.map(genre=><ListItem paddingY={1} key={genre.id}>
 <HStack>
  <Image borderRadius={10} boxSize={10} src={getImageMinimized(genre.image_background)}/>
  <Text fontSize='lg'> {genre.name}</Text>
  </HStack> 
  </ListItem>) }  </List>
  )
}

export default GenreList