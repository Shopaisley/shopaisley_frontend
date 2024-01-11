import type { NextPage } from 'next';

import { Box, ChakraProvider} from '@chakra-ui/react';
import phone from "@/assets/images/electronics/iphone15.png";
import Image from 'next/image';


const ProductGrid:NextPage = () => {
  	return (
      <ChakraProvider>


<Box pos = {"relative"}
  height= "106.8px"
  width=" 132.69px"
  background= "#c4c4c4"

  


 >

<Image src={phone} alt='iphone15'></Image>
 </Box>

<Box  pos = {"relative"}
  letter-spacing = "-0.57px"

 
  fontWeight={"bold"}
  left={"144px"}
  
  top={"-132px"}>
	
	
	iPhone 15</Box>

	<Box   pos = {"relative"}
  font-size=" 14.4px"
  letter-spacing= "-0.41px"
  line-height= "20.57px"
  width= "367.2px"
  left={"143px"}
  top={"-128px"}
  fontSize={"14px"}
  >Specification: 256GB</Box>

<Box  pos = {"relative"}
  font-size=" 14.4px"
  letter-spacing= "-0.41px"
  line-height= "20.57px"
  left={"142px"}
  top={"-116px"}
  fontSize={"14px"}
 
  width= "367.2px">Quantity: 1</Box>


<Box pos = {"relative"}
  letter-spacing = "-0.57px"
  line-height = "30.86px"
  left={"144px"}
  top={"-105px"}
  
  fontWeight={"bold"}>NGN 1,050,000</Box>



<Box   position= "relative"
  font-size=" 14.4px"

  letter-spacing= "-0.41px"
  line-height= "20.57px"
  left={"415px"}
  top={"-130px"}
  textDecoration={"underline"}


  >Remove</Box>








        </ChakraProvider>



        );
};

export default ProductGrid;
