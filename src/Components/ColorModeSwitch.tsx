import { HStack, Switch, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
        <Switch isChecked={colorMode==="light"} onChange={toggleColorMode}></Switch>
    </HStack>
  )
}

export default ColorModeSwitch