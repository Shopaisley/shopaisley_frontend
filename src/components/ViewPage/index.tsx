// @ts-ignore
"use client";

import React, { useState, FC } from "react";
import {
  Box,
  Grid,
  Image,
  Text,
  Select,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";

interface ViewPageProps {
  productName: string;
  productPrice: string;
  productCompany: string;
  productDesc: string;
}

const ProductPage: FC<ViewPageProps> = ({
  productName,
  productPrice,
  productCompany,
  productDesc,
}) => {
  const [itemCount, setItemCount] = useState(1);

  const handleIncrement = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (itemCount > 1) {
      setItemCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      mt={"4rem"}
      gap={4}
      p={4}
      bg={"white"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      {/* Left half: Pictures */}
      <Box h={"490px"} w={"490px"} bg={"grey"} m={"auto"} display={"flex"}>
        {/* Add multiple Image components or use a Carousel component */}
        <Image src="/product-image-1.jpg" alt="Product Image 1" mb={2} />
        <Image src="/product-image-2.jpg" alt="Product Image 2" mb={2} />
        <Image src="/product-image-3.jpg" alt="Product Image 3" />
      </Box>

      {/* Right half: Product details, dropdown, and buttons */}
      <Box >
        <Text fontSize={"2rem"} fontWeight="bold" mb={"1rem"} color={"black"}>
          {productName}
        </Text>
        <Text fontSize={"1.4rem"} color={"black"} mb={"0.4rem"}>
          {productPrice}
        </Text>
        <Text color={"grey"} mb={4}>
          {productCompany}
        </Text>

        <Text mt={"1rem"} fontSize={"0.8rem"} color={"black"} mb={"1rem"}>
          {productDesc}
        </Text>

        <Flex>
          {/* Dropdown for product options */}
          <Button
            onClick={handleDecrement}
            color={"black"}
            bg={"white"}
            mb={"1rem"}
            border={"none"}
            borderTop={"grey solid 0.2px"}
            borderBottom={"grey solid 0.2px"}
            borderLeft={"grey solid 0.2px"}
            fontSize={"1.2rem"}
            pl={"1rem"}
          >
            -
          </Button>
          <Input
            value={itemCount}
            onChange={(e) => setItemCount(Number(e.target.value))}
            w="90px"
            color={"black"}
            bg={"white"}
            outline={"none"}
            border={"none"}
            fontSize={"1rem"}
            borderTop={"grey solid 0.2px"}
            borderBottom={"grey solid 0.2px"}
            pt={"1rem"}
            pb={"1rem"}
            textAlign="center"
            isReadOnly
            mb={"1rem"}
          />
          <Button
            onClick={handleIncrement}
            color={"black"}
            bg={"white"}
            mb={"1rem"}
            border={"none"}
            borderTop={"grey solid 0.2px"}
            borderBottom={"grey solid 0.2px"}
            borderRight={"grey solid 0.2px"}
            fontSize={"1.2rem"}
            pr={"1rem"}
          >
            +
          </Button>

          <Select
            h={"3.2rem"}
            placeholder="Select Option"
            _placeholder={{ color: "black" }}

            ml={"4.4rem"}
            bg={"grey"}
            fontSize={"0.9rem"}
          >
            <option value="option1" color={"black"}>
              Option 1
            </option>
            <option value="option2" color={"black"}>
              Option 2
            </option>
            <option value="option3" color={"black"}>
              Option 3
            </option>
          </Select>

          {/* Box for item count */}
        </Flex>
        {/* Buttons to add to cart and process order */}
        <Flex mt={"2rem"}>
          <Button mr={"4.2rem"} p={"1rem"} w={"9rem"} bg={"#0d0d0d"}>
            Add to Cart
          </Button>
          <Button p={"1rem"} w={"9rem"} bg={"#3E7CB1"}>
            Buy Now
          </Button>
        </Flex>
      </Box>
    </Grid>
  );
};

export default ProductPage;
