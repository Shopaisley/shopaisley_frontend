import { Box, Button, Container, Text, Image} from "@chakra-ui/react";
import { FC } from "react";

interface AdvertBoxProps {
    advertTitle: string;
    advertSubtitle: string;
    advertImage: never;
    advertButtonText: string;
    advertButtonColor: string;
    advertButtonTextColor: string;
    boxWidth: string;
    boxHeight: string;
    boxColor: string;
    TextColor: string;
    fontSize?: string;
    buttonFontSize?: string;
}

const AdvertBox: FC<AdvertBoxProps> = ({
    advertTitle, 
    advertSubtitle, 
    advertImage,
    advertButtonText,
    advertButtonTextColor,
    advertButtonColor,
    boxWidth,
    boxHeight,
    boxColor,
    TextColor, 
    fontSize,
    buttonFontSize = "100%", 
}) => {
    return (
        <Box
            w={boxWidth}
            h={boxHeight}
            bg={boxColor}
            borderRadius={"30px"}
            color={TextColor}
            p={"20px"}
            textAlign={"center"}
            display={"flex"}
        >
            <Container w="60%" display="flex" flexDirection="column" justifyContent="center" backgroundColor={"transparent"}> 
                <Text fontWeight="bold"  backgroundColor={"transparent"} textAlign="left" fontSize={fontSize}>{advertTitle}</Text>
                <Text maxWidth="100%"  backgroundColor={"transparent"} textAlign="left" mt="5%" fontSize={fontSize}>{advertSubtitle}</Text>
                <Button width={"50%"} minWidth={"100px"} maxWidth={"200px"} fontSize={buttonFontSize} fontWeight={"bold"} backgroundColor={advertButtonColor} color={advertButtonTextColor} h="25%" mt="5%" borderRadius="15px">{advertButtonText}</Button>
            </Container>

            <Container w="40%" h="100%"  backgroundColor={"transparent"}>
                <Image src={advertImage} alt="advertImage" style={{ width: "100%", height: "100%", objectFit:"contain", backgroundColor: "transparent"}} />
            </Container>
        </Box>
    );
};

export default AdvertBox;
