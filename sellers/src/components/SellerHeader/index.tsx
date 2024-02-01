// components/Header.tsx
import React,  {FC} from 'react';
import searchBar from '../../assets/icons/fi-rr-search.svg'
import userIcon from '../../assets/icons/fi-rr-circle-user.svg'
import {
  Box,
  Flex,
  Spacer,
  Text,
  Link as ChakraLink,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import "@fontsource/public-sans"
// import Image from 'next/image';
import "@fontsource/poppins"

interface SellerHeaderProps {
  userName: string;
  
}



const SellerHeader: FC<SellerHeaderProps> = (
  {
    userName
}
) => {
  return (
    <Box fontFamily={"Public Sans"}   borderBottomColor={'lightgrey'}
    borderBottomWidth={'0.1px'} w={'1294px'} >
      {/* Sentence */}

      {/* Navbar */}
      <Box justifyContent={'space-between'} bg={'white'} p={'2rem'}>
        {/* Company Name */}
        <Flex align="center" alignContent={'space-around'} >
        <InputGroup ml={'4rem'}>
        <Image src={searchBar} alt='seachBar' width={20} mr={4}></Image>
            <Input
              placeholder="Search"
              ml={2}
              mr={4}
              _placeholder={{ color: 'black', opacity: '0.4' }}
              w={"29rem"}
              bg={"#fff"}
              borderColor={'grey'}
              borderRadius={"10px"}
              color={"black"}
              bgColor={'#ececec'}

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
              fontSize={'14px'}
              bg={"white"}
              borderColor={'#ececec'}
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
          
          
          <ChakraLink textDecoration="none" href="/">
          <Flex>
            <Text
              fontFamily={"Public Sans"}
              alignItems={'center'}
              alignContent={'center'}
              mt={20}
              fontWeight={400}
              fontSize={"17px"}
              mr={4}
              color={'#000'}
            >
              {userName}
            </Text>
            <Image src={userIcon} alt='user' width={40}/>
            </Flex>
          </ChakraLink>

          

          
        </Flex>
      </Box>
    </Box>
  );
};

export default SellerHeader;
