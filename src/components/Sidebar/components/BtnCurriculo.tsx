import { Button, ChakraProps, Link, Text } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";

export function BtnCurriculo(props: ChakraProps) {
  return (
    <Link
      target="_blank"
      href="https://drive.google.com/file/d/1SLRsEE1TzR0IvWXNOXlFKpidd5vEULR7/view?usp=share_link"
    >
      <Button bg="#FFB400" _hover={{}} _focus={{}}>
        <Text mr="4" color="#2B2B2B" textDecoration="none">
          Download CV
        </Text>
        <FiDownload color="#2B2B2B" />
      </Button>
    </Link>
  );
}
