import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/react.svg"
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo}></Image>
       <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar