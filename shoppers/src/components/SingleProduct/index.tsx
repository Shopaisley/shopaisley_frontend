import {
  Box,
  Flex, Text
} from "@chakra-ui/react";
import { FC } from "react";

interface SingleProductProps {
  productName: string;
  productPrice: string;
  ProductMaker: string;
}

const ProductBox: FC<SingleProductProps> = (
  {
    productName,
    productPrice,
    ProductMaker
  }
) => {
  return (
    <>

      <Box
        flex="1"
        w={"full"}
        h={"200px"}
        bg={"#3E7CB1"}
        overflowX="auto"
        alignItems={"center"}
        justifyItems={"center"}

      >
        <Flex>
          <Text fontSize={"2rem"} fontWeight={'700'} color={"black"} mt={"2rem"} ml={"2rem"}>
            {productName}
          </Text>
          <Text fontSize={"1.2rem"} color={"black"} mt={"2rem"} ml={"2rem"}>
            {ProductMaker}
          </Text>
        </Flex>
        <Text color={"black"} mt={"1rem"} ml={"2rem"}>
          {productPrice}
        </Text>
      </Box>
    </>
  )
}

export default ProductBox;