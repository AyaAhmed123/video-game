import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/react.svg"

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo}></Image>
        <Text> Nav Bar Title</Text>
    </HStack>
  )
}

export default NavBar