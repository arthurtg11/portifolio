import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons/lib";

interface IconProps {
  Icon: IconType;
  href: string;
}

export function SocialIcon({ Icon, href }: IconProps) {
  return (
    <Link href={href}>
      <a target="_blank">
        <Box
          bgColor="#FFB400"
          p="1"
          borderRadius="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon color="black" size="1.1rem" />
        </Box>
      </a>
    </Link>
  );
}
