// components/Footer.tsx

import { Box, Flex, Text, Link, Grid } from '@chakra-ui/react';
import React, {FC, useState} from "react";

const Footer: FC = () => {
  return (
    <Box h={'440px'} as="footer" mt="auto" py={4} bgColor="#3E7CB1" color="white">
      <Flex m={'4rem'} justifyContent="center" alignItems="center">
        
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
      <Box gridColumn="span 2" bgColor="blue.500" p={4}>
      <Text fontSize={'1.8rem'} fontWeight={'700px'}>Sign up for our newsletter</Text>
      <Text>Be the first to know about our special offers, new product launches, and events</Text>
      </Box>

      {/* Item that spans one column */}
      <Box bgColor="green.500" p={4}>
        Spanning one column
      </Box>

      {/* Another item that spans one column */}
      <Box bgColor="red.500" p={4}>
        Also spanning one column
      </Box>

      
    </Grid>
      </Flex>
    </Box>
  );
};

export default Footer;
