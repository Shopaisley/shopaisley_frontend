// import LoginForm from "../../../components/LoginForm";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/SAButton";
// import photo from "../../../assets/images/image 5.png"
import phone from "../../../assets/images/gadgets/iphone.png";

import {
  Flex,
  Text,
  Box,
  Grid,
  Divider,
  GridItem,
  useRadio,
  useRadioGroup,
  HStack,
  // Image
} from "@chakra-ui/react";
// import logo from "../../assets/images/shopaisley-logo.png";
import "@fontsource/poppins";
import "@fontsource/public-sans";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import CheckoutProduct from "../../../components/CheckoutProduct";
import AdvertHeader from "../../../components/AdvertHeader";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as='label'>
       <input {...input} />
   <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: '#EFF2F6',
          color: 'black',
          borderColor: '#EFF2F6',
        }}
        _focus={{
          boxShadow: 'outline',
          bg: '#EFF2F6',
          color: 'black',
          borderColor: '#EFF2F6',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}



function Example() {
  // const options = ["DHL Economy Shipping\n", "DHL Express Shipping"];
  const options = [
    {
      id: 0,
      shippingType: "DHL Economy Shipping",
      duration: "4-7 Business Days"
    },
    {
      id: 1,
      shippingType: "DHL Express Shipping",
      duration: "3-5 Business Days"
    }
  ]
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Flex {...group} height={"10%"} width={"100%"} gap={"20px"} flexDir={"column"}  mb={"10%"}>
    {options.map((value) => {
      const radio = getRadioProps({ value });

      return (
        <RadioCard key={value.id} {...radio}>
          <Text mt={"1%"} mb={"1%"} ml={"5%"}><strong>{value.shippingType}</strong></Text>
          <Text mt={"1%"} mb={"1%"} ml={"5%"}>{value.duration}</Text>
        </RadioCard>
      )
    })}
  </Flex>
  )
}

const Shipping = () => {
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
          <Flex flexDir={"column"} w={"78.5%"}>
            <Box
              display={"flex"}
              flexDir={"column"}
              h={"100px"}
              w={"100%"}
              mt={"10%"}
            >
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
                <Text fontSize={"100%"}>Address</Text>
                <Divider
                  w={"50%"}
                  h={"1px"}
                  ml={"10px"}
                  mr={"10px"}
                  bgColor={"black"}
                ></Divider>
                <Text fontSize={"100%"}>
                  <strong>Shipping</strong>
                </Text>
                <Divider
                  w={"50%"}
                  h={"1px"}
                  ml={"10px"}
                  mr={"10px"}
                  bgColor={"black"}
                ></Divider>
                <Text fontSize={"100%"}>Payment</Text>
              </Flex>
            </Box>
              <Example />
              <Button
                buttonText="Continue to payment"
                linkTo={"/checkout/payment"}
              ></Button>
          </Flex>
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
        </GridItem>
      </Grid>
      <Footer></Footer>
    </Box>
  );
};

export default Shipping;
