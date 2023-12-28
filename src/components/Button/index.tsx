import { Box, Button } from "@chakra-ui/react";
import { FC } from "react";

interface ButtonProps {
    buttonText: string;
}

const Buttons: FC<ButtonProps> = (
    {
        buttonText,
    }
    ) => {
    return (
        <Box
        as={Button}
        display={"flex"}
        w = {"408.343px"}
        h=  {"51.429px"}
        justifyContent={"center"}
        alignItems={"center"}
        flexShrink={"0"}
        color={"white"}
        border={"1.029px solid #003EB6"}
        bg={"#3E7CB1"}
        >
           {buttonText}
        </Box>
    )
}

export default Buttons
