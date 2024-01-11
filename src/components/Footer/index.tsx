// components/Footer.tsx

import {
  Box,
  Flex,
  Text,
  Link,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";

const Footer: FC = () => {
  return (
    <Box
      h={"440px"}
      as="footer"
      mt="auto"
      py={4}
      bgColor="#3E7CB1"
      color="white"
    >
      <Box m={'18rem'} mt={'6rem'} justifyContent='center' alignItems="center" flexDirection={{ base: "column", md: "row" }}>
        {/* <Flex>
        <Text >Sign up for our newsletter</Text>
        <Text>Be the first to know about our special offers, new product launches, and events</Text>
        </Flex>
        
        <Box mx={2}>|</Box>
        <Link href="#" mr={2}>
          Privacy Policy
        </Link>
        <Box mx={2}>|</Box>
        <Link href="#" mr={2}>
          Terms of Service
        </Link> */}

        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          {/* Item that spans two columns */}
          <Box gridColumn="span 2" p={4} mr={'2rem'} ml={'2rem'} >
            <Text fontSize={"2rem"} fontWeight={"700px"}>
              Sign up for our newsletter
            </Text>
            <Text fontSize={"0.8rem"} mt={"2rem"}>
              Be the first to know about our special offers, new product
              launches, and events!
            </Text>
            <InputGroup mt={"2rem"}>
              <Input
                placeholder="Email Address"
                _placeholder={{ color: 'white', opacity: '0.4' }} 
                w={"17rem"}
                bg={"#3E7CB1"}
                borderColor={'white'}
                borderLeftRadius={"0.2rem"}
                color={"white"}
                pl={'1.2rem'}
                // Add any other input props you need
              />
              <Button
                h="2rem"
                size="md"
                color={"white"}
                fontWeight={'700px'}
                bg={"#3E7CB1"}
                borderColor={'white'}
                borderRadius={'0.3rem'}
                p={'1.2rem'}
                _hover={{
                    backgroundColor: 'white',
                    color: '#3E7CB1',
                    cursor: 'pointer',
                    border: "1px solid"
                  }}
              >
                Sign Up
              </Button>
            </InputGroup>
          </Box>

          {/* Item that spans one column */}
          <Box  p={4} >
            <Text mb={'1.2rem'}>Shop</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Women's Clothing</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Men's Clothing</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Kid's Clothing</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Groceries</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Essentials</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Electronics</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Gift Cards</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Sale</Text>
          </Box>

          {/* Another item that spans one column */}
          <Box p={4} >
          <Text mb={'1.2rem'}>Help</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Help Center</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Order Status</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Size Chart</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Returns & Warranty</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Contact Us</Text>
          </Box>

          <Box p={4} >
          <Text mb={'1.2rem'}>About</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>About Us</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Responsibility</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Technology & Innovation</Text>
            <Text fontSize={'0.8rem'} mb={'0.4rem'} opacity={'0.4'}>Explore our stories</Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
