import type { NextPage } from 'next';

import { Box, ChakraProvider } from '@chakra-ui/react';

import phone from "@/assets/images/electronics/iphone15.png";
import Image from 'next/image';

const ProductGrid:NextPage = () => {
  	return (
      <ChakraProvider>



<Box pos = {"relative"}
  height= "136.8px"
  width=" 132.69px"
  background= "#c4c4c4"
 ><Image src={phone} alt='iphone15'></Image>

 </Box>

<Box  pos = {"relative"}
  letter-spacing = "-0.57px"

 
  fontWeight={"bold"}
  left={"5px"}
  
  top={"9px"}>
	
	
	iPhone 15</Box>



<Box pos = {"relative"}
  letter-spacing = "-0.57px"
  line-height = "30.86px"
  left={"5px"}
  top={"8px"}
  
  >NGN 1,050,000</Box>



<Box   position= "relative"
  font-size=" 14.4px"

  letter-spacing= "-0.41px"
  line-height= "20.57px"
  left={"149px"}
  top={"-39px"}
 


  >Apple</Box>








        </ChakraProvider>



        );
};

export default ProductGrid;
