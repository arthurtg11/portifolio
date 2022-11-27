import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { idade } from "../../../functions";
import { AvatarCard } from "../../AvatarCard";

export function AvatarPlusInfo() {
  const id = idade(new Date("2001-04-11"), new Date());
  return (
    <>
      <AvatarCard
        name="Arthur Turini"
        src="https://avatars.githubusercontent.com/u/69766361?s=400&u=cba47bebe42f12a68a60e8a2b16a111a8a40ffaf&v=4"
      />
      <Box w="230px" h="0" borderBottom="2px solid #F0F0F6" pt="2" />
      <VStack pt="2">
        <Flex w="230px" h="25px" justifyContent="space-between">
          <Text bgColor="#FFB400" px="2" minW="46px" color="#2B2B2B">
            Age:
          </Text>
          <Text color="#2B2B2B">{id}</Text>
        </Flex>
        <Flex w="230px" h="25px" justifyContent="space-between">
          <Text bgColor="#FFB400" px="2" minW="75px" color="#2B2B2B">
            Address:
          </Text>
          <Text color="#2B2B2B">Alegre, ES</Text>
        </Flex>
      </VStack>
    </>
  );
}
