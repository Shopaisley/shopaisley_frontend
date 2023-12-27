import {
    Box,
    Flex,
    Grid,
    GridItem,
    Text,
    Image,
    Button,
    Link,
  } from "@chakra-ui/react";
  import React, {FC} from "react";

  interface ProductBannerProps {
    categoryName: string;
    categoryText: string;
}

  const ProductBanner: FC<ProductBannerProps> = (
    {
      categoryName,
      categoryText
  }
  ) => {
    return (
        <>
        <Flex bg={"white"}>
        <Box
          flex="1"
          w={"full"}
          h={"200px"}
          bg={"#3E7CB1"}
          overflowX="auto"
          alignItems={"center"}
          justifyItems={"center"}
          
        >
        <Text fontSize={"2rem"} color={"white"} mt={"2rem"} ml={"2rem"}>
        {categoryName}
        </Text>
        <Text color={"white"} mt={"1rem"} ml={"2rem"}>
        {categoryText}
        </Text>
        </Box>
        </Flex>

        </>
    )
  }

export default ProductBanner;