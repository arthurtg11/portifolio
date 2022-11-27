import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

import { BsGithub } from "react-icons/bs";

import { SocialIcon } from "./SocialIcon";

interface AvatarProps {
  name: string;
  src?: string;
  backEnd?: boolean;
}

export function AvatarCard({ name, src, backEnd = true }: AvatarProps) {
  return (
    <VStack spacing="4" w="100%" >
      <Avatar
        h="9.675rem"
        w="9.675rem"
        name={name}
        size="2xl"
        src={src}
        mb="3"
      />

      <Text color="#2B2B2B" fontSize="18px" lineHeight="123%" fontWeight="500">
        {name}
      </Text>
      <Text>{backEnd ? "Back" : "Front"}-End Developer</Text>
      <HStack w="100%" display="flex" justifyContent="center" spacing="3">
        <SocialIcon
          Icon={AiFillInstagram}
          href="https://www.instagram.com/arthurgambati/"
        />

        <SocialIcon
          Icon={TiSocialFacebook}
          href="https://www.facebook.com/arthur.turini.1/"
        />

        <SocialIcon
          Icon={RiLinkedinFill}
          href="https://www.linkedin.com/in/arthur-turini-gambate-9b8459237/"
        />
        <SocialIcon
          Icon={AiOutlineTwitter}
          href="https://twitter.com/AGambate"
        />
        <SocialIcon Icon={BsGithub} href="https://github.com/arthurtg11" />
        <SocialIcon
          Icon={TiSocialYoutube}
          href="https://www.youtube.com/channel/UCCtk02g71o-UpQVSjx_NaxA"
        />
      </HStack>
    </VStack>
  );
}
