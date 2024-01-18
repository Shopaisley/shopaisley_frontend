import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

interface CatalogueProductProps {
  productImage: any;
  productTitle: string;
  Retailer: string;
  productPrice: string;
}

const CatalogueProduct: FC<CatalogueProductProps> = ({
  productImage,
  productTitle,
  Retailer,
  productPrice,
}) => {
  return (
    <Box w={"208px"} h={"340px"} mb={"40px"}
      py={"8px"}
      px={"4px"}
      _hover={{
        boxShadow: "1px 2px 35px 0px rgba(17, 17, 26, 0.18)",
        cursor: "pointer",
        transition: "0.3s ease-in-out"
      }}
    >
      <Flex h={"208px"} w={"208px"}>
        <Image src={productImage} alt={productTitle}></Image>
      </Flex>
      <Flex color={"#000000"} fontSize={"14px"} flexDirection={"row"} align={"center"} justify={"space-between"} mt={"13px"}>
        <Text noOfLines={1} lineHeight={"28px"}><strong>{productTitle}</strong></Text>
        <Text>{Retailer}</Text>
      </Flex>
      <Flex color={"#000000"} mt={"5px"}>{productPrice}</Flex>
    </Box>
  );
};

export default CatalogueProduct;
