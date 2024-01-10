import { Box, Button } from "@chakra-ui/react";
import { FC } from "react";
import "@fontsource/public-sans";

interface ButtonProps {
    buttonText: string;
}

const SAButtons: FC<ButtonProps> = (
    {
        buttonText,
    }
) => {
    return (
        <Box
            as={Button}
            display={"flex"}
            w={"408.343px"}
            h={"51.429px"}
            justifyContent={"center"}
            alignItems={"center"}
            flexShrink={"0"}
            color={"white"}
            border={"1.03px solid #3E7CB1"}
            bg={"#3E7CB1"}
            fontFamily={"Public Sans"}
            fontWeight={600}
            fontSize={"16px"}
        >
            {buttonText}
        </Box>
    )
}

export default SAButtons