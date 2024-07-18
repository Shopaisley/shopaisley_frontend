/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Divider, Flex, Image, Link} from "@chakra-ui/react";
import { FC } from "react";

interface CheckoutProductProps {
  productImage: any;
  productTitle: string;
  productSpecification: string;
  productQuantity: string;
  productPrice: string;
  onClick?: any;
}

const CheckoutProduct: FC<CheckoutProductProps> = ({
  productImage,
  productTitle,
  productSpecification,
  productQuantity,
  productPrice,
  onClick
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
        <Flex noOfLines={1} fontSize={"110%"} mb={"1%"}>
          <strong>{productTitle}</strong>
        </Flex>
        <Flex noOfLines={1} fontSize={"80%"} mb={"1%"}>Specification: {productSpecification}</Flex>
        <Flex fontSize={"80%"} mb={"1%"}>Quantity: {productQuantity}</Flex>
        <Flex fontSize={"110%"}>
          <strong>NGN {productPrice}</strong>
        </Flex>
      </Flex>
      <Flex w={"15%"} fontSize={"80%"} pt={"90px"} flexDirection={"row"} justify={"right"}>
        <Link style={{textDecoration:"underline"}} onClick={onClick}>Remove</Link>
      </Flex>
    </Flex>
    <Divider h={"1%"} bg={"#909090"}></Divider>
    </Box>
  );
};

export default CheckoutProduct;
