/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import { FC, useState } from "react";

interface CatalogueProductProps {
  productImage: any;
  productTitle: string;
  Retailer: string;
  productPrice: number;
}

const CatalogueProduct: FC<CatalogueProductProps> = ({
  productImage,
  productTitle,
  Retailer,
  productPrice,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      w={"208px"}
      h={"340px"}
      mb={"40px"}
      py={"8px"}
      px={"4px"}
      _hover={{
        boxShadow: "1px 2px 35px 0px rgba(17, 17, 26, 0.18)",
        cursor: "pointer",
        transition: "0.3s ease-in-out"
      }}
      borderRadius={"4px"}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Flex h={"208px"} w={"208px"}>
        <Image src={productImage} alt={productTitle} width={"208px"} height={"208px"}/>
      </Flex>
      <Flex
        color={"#000000"}
        fontSize={"14px"}
        flexDirection={"row"}
        align={"center"}
        w={"100%"}
        justify={"space-between"}
        mt={"13px"}
      >
        <Text noOfLines={1} lineHeight={"28px"}>
          <strong>{productTitle}</strong>
        </Text>
        <Text>{Retailer}</Text>
      </Flex>
      <Flex w={"100%"} color={"#000000"} mt={"5px"} align={"start"}>
      ₦{productPrice}
      </Flex>
      {isHovered && (
        <Box
          as={Button}
          w={"95%"}
          justifySelf={"center"}
          bg={"#054A91"}
          borderRadius={"3px"}
          transition={"1s ease-in-out"}
          color={"white"}
          my={"5px"}
          _hover={{
            backgroundColor: "white",
            color: "white",
            cursor: "pointer",
            bgColor: "#3E7CB1",
            transition: "0.3s ease-in-out",
          }}
        >
          Add to cart
        </Box>
      )}
    </Box>
  );
};

export default CatalogueProduct;


