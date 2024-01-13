import type { NextPage } from "next";
import { Box, ChakraProvider, Divider, Flex } from "@chakra-ui/react";
import phone from "@/assets/images/gadgets/iphone.jpeg";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

interface CheckoutProductProps {
  productImage: any;
  productTitle: string;
  productSpecification: string;
  productQuantity: string;
  productPrice: string;
}

const CheckoutProduct: FC<CheckoutProductProps> = ({
  productImage,
  productTitle,
  productSpecification,
  productQuantity,
  productPrice,
}) => {
  return (
    <Box h={"130px"}>
    <Flex w={"100%"} h={"110px"} mb={"1.5%"}>
      <Flex w={"23%"} h={"100%"}>
        <Image src={productImage} alt={productTitle}></Image>
      </Flex>
      <Flex
        w={"60%"}
        h={"90%"}
        mt={"0.7%"}
        ml={"2%"}
        flexDirection={"column"}
        justify={"left"}
      >
        <Flex fontSize={"110%"} mb={"1%"}>
          <strong>{productTitle}</strong>
        </Flex>
        <Flex fontSize={"80%"} mb={"1%"}>Specification: {productSpecification}</Flex>
        <Flex fontSize={"80%"} mb={"1%"}>Quantity: {productQuantity}</Flex>
        <Flex fontSize={"110%"}>
          <strong>NGN {productPrice}</strong>
        </Flex>
      </Flex>
      <Flex w={"15%"} fontSize={"80%"} pt={"90px"} flexDirection={"row"} justify={"right"}>
        <Link href={""} style={{textDecoration:"underline"}}>Remove</Link>

      </Flex>
    </Flex>
    <Divider h={"1%"} bg={"#909090"}></Divider>
    </Box>
  );
};

export default CheckoutProduct;
