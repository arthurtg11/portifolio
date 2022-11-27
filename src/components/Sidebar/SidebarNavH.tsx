import { HStack, useBreakpointValue, VStack } from "@chakra-ui/react";
import { AvatarPlusInfo } from "./components/AvatarPlusInfo";
import { Skills } from "./components/Skills";
import { Languages } from "./components/Languages";
import { ExtraSkills } from "./components/ExtraSkills";
import { useWindowSize } from "../../functions";

export function SidebarNavH() {
  const isDrawerSidebar = useBreakpointValue({
    xl: false,
    lg: true,
    sm: true,
    base: true,
  });
  const { width } = useWindowSize();

  if (!isDrawerSidebar) return <></>;

  return (
    <HStack
      spacing={["2", "5", "10", "20"]}
      px="2%"
      w="100%"
      pt="2"
      bgColor="#FFFFFF"
      h="420px"
      justifyContent="center"
      pb="4"
    >
      <VStack h="100%">
        <AvatarPlusInfo />
      </VStack>
      {width > 800 ? (
        <>
          <Skills w="230px" pt="6" />
          <VStack h="100%">
            <Languages pt="6" w="230px" />
            <ExtraSkills pt="4" maxW="230px" />
          </VStack>
        </>
      ) : (
        <></>
      )}
    </HStack>
  );
}
