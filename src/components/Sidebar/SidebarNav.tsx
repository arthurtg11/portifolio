import { Box, Button, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { FiDownload } from "react-icons/fi";
import { AvatarPlusInfo } from "./components/AvatarPlusInfo";
import { Languages } from "./components/Languages";
import { Skills } from "./components/Skills";
import { ExtraSkills } from "./components/ExtraSkills";
import { BtnCurriculo } from "./components/BtnCurriculo";

export function SidebarNav() {
  return (
    <VStack spacing="7" px="5%" w="305px" pt="6" bgColor="#FFFFFF" pb="32">
      <AvatarPlusInfo />
      <Box w="230px" h="0" borderBottom="2px solid #F0F0F6" />

      <Languages maxW="230px" />
      <Box w="230px" h="0" borderBottom="2px solid #F0F0F6" />

      <Skills maxW="230px" />
      <Box w="230px" h="0" borderBottom="2px solid #F0F0F6" />
      <ExtraSkills maxW="230px" />
      <Box w="230px" h="0" borderBottom="2px solid #F0F0F6" />

      <BtnCurriculo />
    </VStack>
  );
}
