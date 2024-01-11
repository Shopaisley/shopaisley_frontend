/* eslint-disable react/no-unescaped-entities */
// components/Footer.tsx

import {
  Box,
  Text,
  Grid,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import React, { FC } from "react";
import "@fontsource/public-sans"

const Footer: FC = () => {
  return (
    <Box
      h={"440px"}
      // as="footer"
      mt="auto"
      py={"4px"}
      bgColor="#3E7CB1"
      color="white"
      px={"149px"}
      fontFamily={"Public Sans"}
    >
      <Box 
        mt={'6rem'}
        justifyContent='center'
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
      >
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

        <Grid templateColumns="repeat(5, 1fr)" gap={"4px"}>
          {/* Item that spans two columns */}
          <Box
            w={"409.4px"}
            gridColumn="span 2"
            p={"4px"}
            mr={'2rem'}
            // ml={'2rem'}
          >
            <Text  fontSize={"37px"} fontWeight={600}>
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
          <Box  p={"4px"} >
            <Text mb={'1.2rem'}>Shop</Text>
            <Text fontSize={"16.457px"} mb={'0.4rem'} opacity={'0.5'}>Women's Clothing</Text>
            <Text fontSize={"16.457px"} mb={'0.4rem'} opacity={'0.5'}>Men's Clothing</Text>
            <Text fontSize={"16.457px"} mb={'0.4rem'} opacity={'0.5'}>Kid's Clothing</Text>
            <Text fontSize={"16.457px"} mb={'0.4rem'} opacity={'0.5'}>Groceries</Text>
            <Text fontSize={"16.457px"} mb={'0.4rem'} opacity={'0.5'}>Essentials</Text>
            <Text fontSize={"16.457px"} mb={'0.4rem'} opacity={'0.5'}>Electronics</Text>
            <Text fontSize={"16.457px"} mb={'0.4rem'} opacity={'0.5'}>Gift Cards</Text>
            <Text fontSize={"16.457px"} mb={'0.4rem'} opacity={'0.5'}>Sale</Text>
          </Box>

          {/* Another item that spans one column */}
          <Box p={"4px"} >
          <Text mb={'1.2rem'}>Help</Text>
            <Text mb={'0.4rem'} fontSize={"16.457px"}  opacity={'0.5'}>Help Center</Text>
            <Text mb={'0.4rem'} fontSize={"16.457px"}  opacity={'0.5'}>Order Status</Text>
            <Text mb={'0.4rem'} fontSize={"16.457px"}  opacity={'0.5'}>Size Chart</Text>
            <Text mb={'0.4rem'} fontSize={"16.457px"}  opacity={'0.5'}>Returns & Warranty</Text>
            <Text mb={'0.4rem'} fontSize={"16.457px"}  opacity={'0.5'}>Contact Us</Text>
          </Box>

          <Box fontSize={"16.457px"} fontWeight={500} p={"4px"} >
          <Text  mb={'1.2rem'}>About</Text>
            <Text mb={'0.4rem'} fontSize={"16.457px"} opacity={'0.5'}>About Us</Text>
            <Text mb={'0.4rem'} fontSize={"16.457px"} opacity={'0.5'}>Responsibility</Text>
            <Text mb={'0.4rem'} fontSize={"16.457px"} opacity={'0.5'}>Technology & Innovation</Text>
            <Text mb={'0.4rem'} fontSize={"16.457px"} opacity={'0.5'}>Explore our stories</Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
