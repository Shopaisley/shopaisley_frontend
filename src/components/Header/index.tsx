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
import "@fontsource/public-sans"
import "@fontsource/poppins"


const Header = () => {
  return (
    <Box fontFamily={"Public Sans"} >
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
            <Input
              placeholder="Search..."
              _placeholder={{ color: 'black', opacity: '0.4' }}
              w={"17rem"}
              bg={"#fff"}
              borderColor={'white'}
              borderLeftRadius={"0.2rem"}
              color={"black"}

              pl={'0.4rem'}

            // Add any other input props you need
            />
            <Button
              h="2rem"
              size="md"
              color={"white"}
              fontWeight={'700px'}
              bg={"#3E7CB1"}
              borderColor={'white'}
              borderRightRadius={'0.2rem'}
              p={'0.4rem'}
              _hover={{
                backgroundColor: 'black',
                color: '#3E7CB1',
                cursor: 'pointer'
              }}
            >
              Search
            </Button>
          </InputGroup>
        </Flex>


        {/* Search Bar */}


        {/* Login Button */}
        <Flex>
          <Text color={'black'} mr={'2rem'}> Cart: 0</Text>
          <ChakraLink href='#' color={'black'}>Sign In</ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
