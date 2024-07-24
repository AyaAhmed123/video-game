import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/react.svg"
import ColorModeSwitch from './ColorModeSwitch'
import Search from './Search'
interface Props{
  onSearch:(text:string)=>void
}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack  padding="10px">
        <Image src={logo}></Image>
        <Search onSearch={onSearch}></Search>
       <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar