import { Box, Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { IconType } from "react-icons/lib";

interface PortfolioCardProps {
  title: string;
  image: string;
  href: string;
  desc: string;
}

export function PortfolioCard({
  title,
  image,
  href,
  desc,
}: PortfolioCardProps) {
  return (
    <VStack borderRadius="1px" bgColor="#ffffff" minH="350px" w="312px">
      <Link target="_blank" href={href}>
        <Flex w="310px" h="180px">
          <Image src={image} alt={title} w="100%" />
        </Flex>
      </Link>
      <Flex px="4" py="4">
        <Text>{desc}</Text>
      </Flex>
    </VStack>
  );
}
