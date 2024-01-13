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
    <Box w={"190px"} h={"200px"} mb={"40px"}>
      <Flex h={"80%"} w={"100%"}>
        <Image src={productImage} alt={productTitle}></Image>
      </Flex>
      <Flex h={"10%"} flexDirection={"row"} justify={"space-between"} mt={"10px"}>
          <Text noOfLines={1}><strong>{productTitle}</strong></Text>
          <Text>{Retailer}</Text>
      </Flex>
        <Flex mt={"5px"}>{productPrice}</Flex>
    </Box>
  );
};

export default CatalogueProduct;
