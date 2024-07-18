/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Box, Button } from "@chakra-ui/react";
import { FC } from "react";
import "@fontsource/public-sans";
// import { useNavigate } from "react-router-dom";

interface ButtonProps {
    buttonText: string;
    onClick: any;
}

const SAButtons: FC<ButtonProps> = (
    {
        buttonText,
        onClick
    }
) => {
    return (
        <Box
            as={Button}
            display={"flex"}
            w={"100%"}
            borderRadius={"6px"}
            h={"51.429px"}
            justifyContent={"center"}
            alignItems={"center"}
            flexShrink={"0"}
            color={"white"}
            border={"1.03px solid #3E7CB1"}
            bg={"#0D3058"}
            fontFamily={"Value Sans Pro"}
            fontWeight={600}
            fontSize={"17px"}
            _hover={{
                bg: "#09203B",
                color: "#fff",
            }}
            onClick={onClick}
        >
            {buttonText}
        </Box>
    )
}

export default SAButtons
