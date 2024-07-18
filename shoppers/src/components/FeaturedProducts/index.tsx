/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface FeaturedProductsProps {
    image: string;
    productName: string;
    productPrice: string;
    onClick?: any;
}

const FeaturedProducts: FC<FeaturedProductsProps> = ({
    image,
    productName,
    productPrice,
    onClick
}) => {
    return (
        <Flex
            w={"310px"}
            h={"139px"}
            justifyItems={"center"}
            borderRadius={"5px"}
            bg={"#FFFFFF"}
            fontFamily={"'Mulish'"}
            boxShadow= {"2px 2px 5px 0px rgba(0, 0, 0, 0.25)"}
            flexDir={"row"}
            align={"center"}
            px={"10px"}
            gap={"15px"}
            cursor={"pointer"}
            onClick={onClick}
            _hover={{
                // boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)"
                transform: "scale(1.02)",
                transition: "transform 0.5s",
                border: "1px solid #124076"
            }}
        >
            <Image
                src={image}
                alt={productName}
                w={"82px"}
                h={"100px"}
            />
            <Box>
                <Text
                    fontSize={"12px"}
                    fontWeight={400}
                    color={"#000000"}
                    ml={"10px"}
                >
                    {productName}
                </Text>
                <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#000000"}
                    ml={"10px"}
                >
                    ₦{productPrice}
                </Text>
            </Box>
        </Flex>
    )
}

export default FeaturedProducts;