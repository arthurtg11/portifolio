import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        body: "Inter, Sans-serif",
        heading: "Inter, Sans-serif",
    },
    styles: {
        global: {
            body: {
                bg: '#F0F0F6',
                color: '#767676',
            }
        }
    }
})