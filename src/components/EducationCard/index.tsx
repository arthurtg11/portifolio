import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";

interface EducationCardProps {
  title: string;
  time: string;
  desc: string;
}

export function EducationCard({ title, time, desc }: EducationCardProps) {
  return (
    <SimpleGrid
      flex="1"
      px="4"
      bgColor="#FFFFFF"
      columns={[1, 1, 1, 2]}
      w="100%"
      py="8"
    >
      <Box w="100%" spacing="4" py="4" pl="10" pr={[10, 10, 0]} h="120px">
        <Text
          fontSize="18px"
          lineHeight="123%"
          fontWeight="500"
          color="#2B2B2B"
          w="100%"
          mb="4"
        >
          {title}
        </Text>
        <Flex justifyContent="flex-start" alignItems="center" w="100%">
          <Text
            fontWeight="400"
            fontSize="15"
            lineHeight="24px"
            color="#2B2B2B"
            mr="6"
          >
            Student
          </Text>
          <Flex
            minW="111px"
            h="18px"
            bgColor="#FFB400"
            borderRadius="1px"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="#FFFFFF" fontSize="10px" fontWeight="400">
              {time}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Flex ml={[0, 0, 0, "-14"]} mt={[0, 0, 0, 0]}>
        <Text
          fontWeight="400"
          fontSize="15px"
          lineHeight="24px"
          color="#767676"
          w={["80%", "80%", "80%", "100%"]}
          margin="0 auto"
        >
          {desc}
        </Text>
      </Flex>
    </SimpleGrid>
  );
}
