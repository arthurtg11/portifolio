import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { IconType } from "react-icons/lib";

interface PortfolioCardProps {
  title: string;
  image: string;
  href: string;
  desc: string;
  date: string;
}

export function ExperienceCard({
  title,
  image,
  href,
  desc,
  date
}: PortfolioCardProps) {
  return (
    <VStack bgColor="#ffffff" h="542px" w="310px">
      <Flex w="310px" h="302px">
        <Image src={image} alt={title} w="100%" />
      </Flex>
      <Flex px="4" pt="3" h="140px" pb="0">
        <Text>{desc}</Text>
      </Flex>
      <Flex px="4" w="100%" h="18px">
        <Flex
          minW="111px"
          h="18px"
          bgColor="#FFB400"
          borderRadius="1px"
          justifyContent="center"
          alignItems="center"
          alignSelf="flex-start"
        >
          <Text color="#FFFFFF" fontSize="10px" fontWeight="400">
            {date}
          </Text>
        </Flex>
      </Flex>

      <Flex h="40px" pt="4" w="100%" px="4">
        <Text
          fontWeight="500"
          color="#FFB400"
          fontSize="18px"
          lineHeight="123%"
        >
          <a target="_blank" href={href}>
            Learn More &gt;
          </a>
        </Text>
      </Flex>
    </VStack>
  );
}
