import { ChakraProps, Text, VStack } from "@chakra-ui/react";

import { ProgressBar } from "./ProgressBar";

export function Skills(props: ChakraProps) {
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
        Skills
      </Text>
      <ProgressBar name="Java" percent={95} />
      <ProgressBar name="Spring Boot" percent={85} />
      <ProgressBar name="PL/SQL" percent={90} />
      <ProgressBar name="React.Js" percent={85} />
      <ProgressBar name="Next.Js" percent={75} />
    </VStack>
  );
}
