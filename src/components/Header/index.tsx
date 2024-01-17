// components/Header.tsx
import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Text,
  Link as ChakraLink,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import shoppingBag from '@/assets/icons/shopping-bag.svg'
import searchBar from '@/assets/icons/fi-rr-search.svg'

import Image from 'next/image';
import "@fontsource/public-sans"
import "@fontsource/poppins"


const Header = () => {
  return (
    <Box fontFamily={"Public Sans"} borderBottom={"1px solid #909090"} >
      {/* Sentence */}
      <Flex color={"#FFFFFF"} fontWeight={500} align={'center'} justifyContent={'space-between'} bg={'#3E7CB1'}>
        <Text fontSize="sm" m={'1rem'} ml={'2rem'}>
          NGN
        </Text>
        <Text fontSize="sm" mb={2}>
          FREE SHIPPING ON ALL ORDERS ABOVE NGN20,000.00 THIS BLACK FRIDAY!
        </Text>
        <Text fontSize="sm" textAlign='end' mr={'2rem'} mb={2}>
          Contact Us
        </Text>
      </Flex>

      {/* Navbar */}
      <Flex align="center" justifyContent={'space-between'} bg={'white'} p={'2rem'}>
        {/* Company Name */}
        <Flex align="center" alignContent={'space-around'} >
          <ChakraLink textDecoration="none" href="/">
            <Text
              color={"#000000"}
              fontFamily={"Public Sans"}
              fontWeight={700}
              fontSize={"21px"}
            >
              Shop<span style={{ color: "#054A91" }}>aisley</span>
            </Text>
          </ChakraLink>

          {/* Links */}
          <ChakraLink href="#" color="black" ml={'2.4rem'} >
            Clothing
          </ChakraLink>
          <ChakraLink href="#" color="black" ml={'2.4rem'} >
            Groceries
          </ChakraLink>
          <ChakraLink href="#" color="black" ml={'2.4rem'} >
            Electronics
          </ChakraLink>

          <InputGroup ml={'4rem'}>
            <Image src={searchBar} alt='seachBar' width={20}></Image>
            <Input
              placeholder="Search"
              marginLeft={3}
              marginRight={3}
              _placeholder={{ color: 'black', opacity: '0.4' }}
              w={"30rem"}
              border={'2px solid'}
              borderRadius={15}
              borderColor={'black'}
              color={"black"}

              pl={'0.4rem'}

            // Add any other input props you need
            />
            <Button
              h="2rem"
              size="md"
              marginTop={1}
              color={"black"}
              border={"2px solid"}
              fontWeight={'700px'}
              bg={"white"}
              borderColor={'black'}
              borderRadius={'0.5rem'}
              p={'0.4rem'}
              _hover={{
                backgroundColor: 'white',
                color: 'white',
                cursor: 'pointer',
                bgColor: '#3E7CB1',
                borderColor: '#3E7CB1',
                border: "2px solid"
              }}
            >
              Search
            </Button>
          </InputGroup>
        </Flex>


        {/* Search Bar */}


        {/* Login Button */}
        <Flex
          flexDir={"row"}
          justify={"center"}
          align="center"
        >
          <Flex>
            <Image src={shoppingBag} alt='shopping bag' width={20}></Image>
            <Text color={'black'} mr={'1rem'} ml={'0.3rem'} mt={'0.2rem'}>0</Text>
          </Flex>
          <ChakraLink href='#' color={'black'}>Sign In</ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
