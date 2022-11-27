import { VStack } from "@chakra-ui/react";
import { Skills } from "./components/Skills";
import { Languages } from "./components/Languages";
import { ExtraSkills } from "./components/ExtraSkills";

export function SidebarNavHMobile() {
  return (
    <VStack
      spacing={["2", "5", "6", "20"]}
      px="2%"
      w="100%"
      pt="2"
      bgColor="#FFFFFF"
      justifyContent="center"
    >
      <Skills px="8" pt="6" />
      <Languages px="8" pt="6" />
      <ExtraSkills px="8" pt="6" />
    </VStack>
  );
}
