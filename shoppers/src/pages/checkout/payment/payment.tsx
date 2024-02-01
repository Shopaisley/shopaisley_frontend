// import LoginForm from "../../../components/LoginForm";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/SAButton";
import photo from "../../../assets/images/image 5.png"
import phone from "../../../assets/images/gadgets/iphone.png"
import {
  Flex,
  Text,
  // Link as ChakraLink,
  Box,
  Grid,
  Divider,
  GridItem,
  Input,
  InputGroup,
  Switch,
  FormControl,
  FormLabel,
  Select,
  Image
} from "@chakra-ui/react";
// import logo from "@/assets/images/shopaisley-logo.png";
import "@fontsource/poppins";
import "@fontsource/public-sans";
<<<<<<< HEAD:shoppers/src/app/checkout/payment/page.tsx
import Image from "next/image";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import CheckoutProduct from "@/components/CheckoutProduct";
import AdvertHeader from "@/components/AdvertHeader";
=======
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import CheckoutProduct from "../../../components/CheckoutProduct";
>>>>>>> 9f476b6a8fbc952182abff4b2ac73cf1f02810ba:shoppers/src/pages/checkout/payment/payment.tsx


const Payment = () => {
  return (
    <Box fontFamily={"Public Sans"}>
      <AdvertHeader />
      <Header />
      <Grid templateColumns="repeat(2, 1fr)" h={"100vh"}>
        <GridItem
          bgColor={"#EFF2F6"}
          h={"100%"}
          paddingLeft={"10%"}
          paddingRight={"10%"}
        >
          <Box display={"flex"} flexDir={"column"} h={"100px"} mt={"10%"}>
            <Text fontSize={"230%"} h={"100%"}>
              <strong>Checkout</strong>
            </Text>
            <Flex
              flexDir={"row"}
              align={"center"}
              h={"100%"}
              w={"100%"}
              display={"flex"}
              position={"relative"}
            >
              <Text fontSize={"100%"}>
                Address
              </Text>
              <Divider
                w={"20%"}
                h={"1px"}
                ml={"10px"}
                mr={"10px"}
                bgColor={"black"}
              ></Divider>
              <Text fontSize={"100%"}>Shipping</Text>
              <Divider
                w={"20%"}
                h={"1px"}
                ml={"10px"}
                mr={"10px"}
                bgColor={"black"}
              ></Divider>
              <Text fontSize={"100%"}><strong>Payment</strong></Text>
            </Flex>
          </Box>
          <Box h={"39.46px"} w={"35%"} border={"1px solid"} pt={"10px"} bgColor={"white"}>
            <center>
          <Image src={photo} alt='paystack' width={89}></Image>
          </center>
          </Box>

          <Box h={"400px"} mt={"3%"} mb={"15%"}>
            <Text fontSize={"150%"} mb={"10px"}>
              Payment details
            </Text>
            <InputGroup mb={"10px"}>
              <Input
                borderRadius={"0"}
                placeholder="Cardholder Name"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            
            </InputGroup>
            <InputGroup mb={"10px"}>
              <Input
                borderRadius={"0"}
                placeholder="Card Number"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
           
            <InputGroup mb={"10px"}>
            <Select placeholder="Month"
                borderRadius={"0"}
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"30%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
                mr={"5%"}
                ml={"-1.2%"}
              >
              <option value='option1'>January</option>
              <option value='option2'>February</option>
              <option value='option3'>March</option>
              <option value='option4'>April</option>
              <option value='option5'>May</option>
              <option value='option6'>June</option>
              <option value='option7'>July</option>
              <option value='option8'>August</option>
              <option value='option9'>September</option>
              <option value='option10'>October</option>
              <option value='option11'>November</option>
              <option value='option12'>December</option>
            </Select>
           
            
            <Select placeholder='Year'
              
               
               borderRadius={"0"}
               _placeholder={{ color: "black", opacity: "0.4" }}
               w={"30%"}
               border={"2px solid"}
               borderColor={"#909090"}
               color={"black"}
               pl={"0.4rem"}
               mr={"5%"}
               ml={"-1.2%"}
               >
              <option value='option1'>2024</option>
              <option value='option2'>2025</option>
              <option value='option3'>2026</option>
              <option value='option4'>2027</option>
              <option value='option5'>2028</option>
              <option value='option6'>2029</option>
              <option value='option7'>2030</option>
              <option value='option8'>2031</option>
              <option value='option9'>2032</option>
              <option value='option10'>2033</option>
              <option value='option10'>2034</option>
            </Select>

              
              <Input
                borderRadius={"0"}
                placeholder="CVC"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"33%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <FormControl display='flex' alignItems='center' mt={"20px"}
              color={"#909090"} mb={"20px"}>
            <FormLabel htmlFor='future-payments' mb='0' color={"black"}>
                Save card data for future payments
            </FormLabel>
            <Switch id='future-payments' />
            </FormControl>

            <Button buttonText="Pay with card" linkTo={""}></Button>
          </Box>
        </GridItem>
        <GridItem
          bgColor={"#EFF2F6"}
          h={"100%"}
          paddingLeft={"10%"}
          paddingRight={"10%"}
        >
            <Box mt={"20%"}>
            <Text color={"black"} mb={"20px"} fontSize={"120%"}>
              Your cart
            </Text>
            <CheckoutProduct
              productImage={phone}
              productTitle="iPhone 15"
              productSpecification="Pink"
              productQuantity="1"
              productPrice="1,050,000"
            ></CheckoutProduct>
            <CheckoutProduct
              productImage={phone}
              productTitle="iPhone 15 Magsafe"
              productSpecification="Pink"
              productQuantity="1"
              productPrice="50,000"
            ></CheckoutProduct>
            
           
          </Box>
          {/* <Box h={"100%"} w={"80%"} display={"flex"} bgColor={"yellow"}>
                    <Text fontSize={"100%"}>Address</Text>
                    <Divider w={30} h={0.7} bgColor={"red"} mt={"10%"} ></Divider>
                    <Text>Address</Text>
                    <Divider w={10} h={1} bgColor={"green"}></Divider>
                    <Text>hi</Text>
                    </Box> 
                    
                     <Checkbox
              mt={"10px"}
              color={"#909090"}
              mb={"20px"}
              className="custom-checkbox"
            >
            
            </Checkbox>

             
             
            */}
        </GridItem>
      </Grid>
      <Footer></Footer>
    </Box>
  );
};

export default Payment;