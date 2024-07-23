import React from 'react'
import usePlatforms from '../hooks/usePlatforms'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const PlatformSelector = () => {
 const{data,error}= usePlatforms();

  return (
 <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>platforms</MenuButton>
    <MenuList>
        {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
 </Menu>
  )
}

export default PlatformSelector