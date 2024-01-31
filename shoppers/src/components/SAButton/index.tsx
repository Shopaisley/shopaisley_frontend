"use client"
import { Box, Button } from "@chakra-ui/react";
import { FC } from "react";
import "@fontsource/public-sans";
import { useNavigate } from "react-router-dom";
// import { useRouter } from "next/navigation";

interface ButtonProps {
    buttonText: string;
    linkTo: string;
}

const SAButtons: FC<ButtonProps> = (
    {
        buttonText,
        linkTo
    }
) => {
    const router = useNavigate()
    const handleSubmit = () => {
        router(linkTo)
    }
    return (
        <Box
            as={Button}
            display={"flex"}
            w={"100%"}
            borderRadius={"0"}
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
            _hover={{
                color: "#000000",
            }}
            onClick={handleSubmit}
        >
            {buttonText}
        </Box>
    )
}

export default SAButtons
