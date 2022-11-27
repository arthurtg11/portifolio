import { ChakraProps, Flex, Text, VStack } from "@chakra-ui/react";
import { HiOutlineSquare2Stack } from "react-icons/hi2";

export function ExtraSkills(props: ChakraProps) {
  return (
    <VStack
      spacing="2"
      w="100%"
      h="100%"
      justifyItems="center"
      pb="4"
      {...props}
    >
      <Text
        fontSize="18px"
        lineHeight="123%"
        color="#2B2B2B"
        fontWeight="500"
        w="100%"
        mt="-2"
        mb="3"
      >
        Extra Skills
      </Text>
      <Flex w="100%">
        <HiOutlineSquare2Stack size="20px" color="#FFB400" />
        <Text ml="3%">Chakra-UI, Next.js</Text>
      </Flex>
      <Flex w="100%">
        <HiOutlineSquare2Stack size="20px" color="#FFB400" />
        <Text ml="3%">Node.js, React Native</Text>
      </Flex>
      <Flex w="100%">
        <HiOutlineSquare2Stack size="20px" color="#FFB400" />
        <Text ml="3%">GitHub, Git Extension</Text>
      </Flex>
      <Flex w="100%">
        <HiOutlineSquare2Stack size="20px" color="#FFB400" />
        <Text ml="3%">Sql Server</Text>
      </Flex>
    </VStack>
  );
}
