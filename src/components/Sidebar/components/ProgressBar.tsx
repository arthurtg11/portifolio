import { Box, Flex, Text } from "@chakra-ui/react";

interface ProgressProps {
  name: string;
  percent: number;
}

export function ProgressBar({ name, percent  }: ProgressProps) {
  const widthPercent = percent + "%";
  return (
    <Box w="100%">
      <Flex w="100%" h="25px" justifyContent="space-between" mb="3">
        <Text>{name}</Text>
        <Text>{percent}%</Text>
      </Flex>
      <Box border="1px solid #FFB400" h="6px" borderRadius="30px" p="1px">
        <Flex
          w={widthPercent}
          bgColor="#FFB400"
          h="2px"
          p="0"
          m="0"
          borderRadius="30px"
        ></Flex>
      </Box>
    </Box>
  );
}
