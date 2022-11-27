import { ChakraProps, Text, VStack } from "@chakra-ui/react";
import { ProgressBar } from "./ProgressBar";

export function Languages(props: ChakraProps) {
  return (
    <VStack spacing="4" w="100%" h="100%" justifyItems="center" {...props}>
      <Text
        fontSize="18px"
        lineHeight="123%"
        color="#2B2B2B"
        fontWeight="500"
        w="100%"
        mt="-2"
      >
        Languages
      </Text>
      <ProgressBar name="Portuguese" percent={100} />
      <ProgressBar name="English" percent={80} />
    </VStack>
  );
}
