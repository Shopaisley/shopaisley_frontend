import { Box } from "@chakra-ui/react";
import { FC } from "react";

interface ButtonProps {
    categoryName: string;
}

const Buttons: FC<ButtonProps> = (
    {
        categoryName,
    }
    ) => {
    return (
        <Box 
        
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
           {categoryName}
        </Box>
    )
}

export default Buttons