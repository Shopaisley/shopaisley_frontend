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
    <Box fontFamily={"Public Sans"} borderBottom={"1px solid #909090"} position="sticky" top={0} zIndex={10}>
      {/* Sentence */}
      {/* Navbar */}
      <Flex
        as={"nav"}
        align="center"
        justifyContent={'space-between'}
        bg={'white'}
        px={'2rem'}
        py= {'1.3rem'}
        width="100%"
        position="sticky"
        top={0}
        zIndex={"100"}
      >
        {/* Company Name */}
        <Flex align="center" alignContent={'space-around'} >
          <ChakraLink _hover={{ textDecoration: "none" }} href="/">
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
              color={"white"}
              // border={"2px solid #054A91"}
              fontWeight={'700px'}
              bg={"#054A91"}
              borderColor={'black'}
              borderRadius={'0.5rem'}
              p={'0.4rem'}
              _hover={{
                backgroundColor: 'white',
                color: 'white',
                cursor: 'pointer',
                bgColor: '#3E7CB1',
                // borderColor: '#3E7CB1',
                // border: "2px solid"
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
          <ChakraLink 
            href='/login'
            color={'black'}
            fontWeight={'600'}
            _hover={{
              textDecor: "none"
            }}
          >
            Sign In
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
