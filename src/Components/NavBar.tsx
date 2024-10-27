import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo}></Image>
      <Search></Search>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
