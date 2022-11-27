import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { IconType } from "react-icons/lib";

interface ServiceCardProps {
  title: string;
  image: string;
  desc: string;
}

export function ServiceCard({ title, image, desc }: ServiceCardProps) {
  return (
    <VStack spacing="5" px="4" w="310px" h="225px" bgColor="#FFFFFF" py="8" mx="3">
      <Image src={image} />
      <Text fontWeight="500" fontSize="18px" lineHeight="123%" color="#2B2B2B">
        {title}
      </Text>
      <Text
        fontWeight="400"
        fontSize="15px"
        lineHeight="24px"
        textAlign="center"
        color="#767676"
      >
        {desc}
      </Text>
    </VStack>
  );
}
