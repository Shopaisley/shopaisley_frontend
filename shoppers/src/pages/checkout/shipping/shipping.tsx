// import LoginForm from "../../../components/LoginForm";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/SAButton";
// import photo from "../../../assets/images/image 5.png"
import phone from "../../../assets/images/gadgets/iphone.png"
import {
  Flex,
  Text,
  Box,
  Grid,
  Divider,
  GridItem,
  Checkbox,
  // Image
} from "@chakra-ui/react";
// import logo from "../../assets/images/shopaisley-logo.png";
import "@fontsource/poppins";
import "@fontsource/public-sans";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import CheckoutProduct from "../../../components/CheckoutProduct";


const Shipping = () => {
  return (
    <Box fontFamily={"Public Sans"}>
      <Header />
      <Grid templateColumns="repeat(2, 1fr)" h={"100vh"}>
        <GridItem
          bgColor={"#EFF2F6"}
          h={"100%"}
          paddingLeft={"10%"}
          paddingRight={"10%"}
        >
          <Box display={"flex"} flexDir={"column"} h={"100px"} mt={"10%"}>
            <Text fontSize={"230%"} h={"100%"} mb={"5px"}>
              <strong>Checkout</strong>
            </Text>
            <Flex
              flexDir={"row"}
              align={"center"}
              h={"100%"}
              w={"100%"}
              display={"flex"}
              position={"relative"}
              mb={"50px"}
            >
              <Text  fontSize={"100%"}>
                Address
              </Text>
              <Divider
                w={"20%"}
                h={"1px"}
                ml={"10px"}
                mr={"10px"}
                bgColor={"black"}
              ></Divider>
              <Text  fontSize={"100%"}><strong>Shipping</strong></Text>
              <Divider
                w={"20%"}
                h={"1px"}
                ml={"10px"}
                mr={"10px"}
                bgColor={"black"}
              ></Divider>
              <Text fontSize={"100%"}>Payment</Text>
            </Flex>
          </Box>
          <Box h={"78.92px"} w={"85%"} border={"2px solid"} mb={"20px"} pt={"10px"} bgColor={"white"}>
          <Checkbox
              mt={"5px"}
              color={"#909090"}
              mb={"20px"}
              paddingLeft={"30px"}
              className="custom-checkbox"
              isChecked
            >
             <Text  fontSize={"100%"} color={"black"} mt={"2.5px"} ><strong>DHL Economy Payment</strong></Text>
             <Text  fontSize={"100%"} color={"black"}>4-7 business days</Text>
            </Checkbox>
          </Box>

          <Box h={"78.92px"} w={"85%"} mb={"100px"}  pt={"20px"} bgColor={"white"}>
          <Checkbox
              mt={"1.25px"}
              color={"#909090"}
              mb={"20px"}
              paddingLeft={"30px"}
              className="custom-checkbox"
            >
             <Text  fontSize={"100%"} color={"black"} mt={"0.675px"} ><strong>DHL Express Shipping</strong></Text>
             <Text  fontSize={"100%"} color={"black"}> 3-5 business days</Text>
            </Checkbox>
          </Box>

          <Box h={"100px"} mt={"3%"} mb={"15%"}>

            <Button  buttonText="Continue to payment" linkTo={"/checkout/payment"}></Button>
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

export default Shipping;