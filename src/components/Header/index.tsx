// components/Header.tsx

import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Text,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" p={4} bgColor="teal.500" color="white">
      {/* Sentence */}
      <Flex align={'center'} justifyContent={'space-between'} bg={'#3E7CB1'}>
      <Text fontSize="sm"  m={'1rem'} ml={'2rem'}>
        NGN      </Text>
      <Text fontSize="sm"      mb={2}>
      FREE SHIPPING ON ALL ORDERS ABOVE NGN20,000.00 THIS BLACK FRIDAY!
      </Text>
      <Text fontSize="sm" textAlign='end' mr={'2rem'} mb={2}>
        Contact Us      </Text>
      </Flex>

      {/* Navbar */}
      <Flex align="center" justifyContent={'space-between'} bg={'white'} p={'2rem'}>
        {/* Company Name */}
        <Flex align="center" alignContent={'space-around'} >
        <Link fontSize="lg" fontWeight="bold"  color="black">
          Shopaisley
        </Link>

        {/* Links */}
        <Link  href="#" color="black" ml={'2.4rem'} >
          Clothing
        </Link>
        <Link href="#" color="black" ml={'2.4rem'} >
          Groceries
        </Link>
        <Link  href="#" color="black" ml={'2.4rem'} >
          Electronics
        </Link>

        <InputGroup  ml={'4rem'}>
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
        <Link href='#' color={'black'}>Sign In</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
