// ProductPage.tsx

import React, { useState, FC } from 'react';
import {
  Box,
  Grid,
  Image,
  Text,
  Select,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react';

interface ViewPageProps {
    productName: string;
    productPrice: string;
    productCompany: string;
    productDesc: string;
}

const ProductPage: FC<ViewPageProps> = (
    {
    productName,
    productPrice,
    productCompany,
    productDesc
    }
) => {
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
    <Grid templateColumns="repeat(2, 1fr)" gap={4} p={4}>
      {/* Left half: Pictures */}
      <Box>
        {/* Add multiple Image components or use a Carousel component */}
        <Image src="/product-image-1.jpg" alt="Product Image 1" mb={2} />
        <Image src="/product-image-2.jpg" alt="Product Image 2" mb={2} />
        <Image src="/product-image-3.jpg" alt="Product Image 3" />
      </Box>

      {/* Right half: Product details, dropdown, and buttons */}
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          {productName}
        </Text>
        <Text fontWeight="bold" mb={4}>
          {productPrice}
        </Text>
        <Text fontWeight="bold" mb={4}>
          {productCompany}
        </Text>

        <Text mt={'1rem'} fontWeight="bold" mb={4}>
          {productDesc}
        </Text>

        {/* Dropdown for product options */}
        <Select mb={4} placeholder="Select Option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        {/* Box for item count */}
        <Flex align="center" mb={4}>
          <Button onClick={handleDecrement} size="sm" mr={2}>
            -
          </Button>
          <Input
            value={itemCount}
            onChange={(e) => setItemCount(Number(e.target.value))}
            w="50px"
            textAlign="center"
            isReadOnly
          />
          <Button onClick={handleIncrement} size="sm" ml={2}>
            +
          </Button>
        </Flex>

        {/* Buttons to add to cart and process order */}
        <Flex>
          <Button colorScheme="teal" mr={2}>
            Add to Cart
          </Button>
          <Button colorScheme="blue">Process Order</Button>
        </Flex>
      </Box>
    </Grid>
  );
};

export default ProductPage;
