/* eslint-disable @typescript-eslint/no-explicit-any */
// import LoginForm from "../../../components/LoginForm";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/SAButton";

import {
  Flex,
  Text,
  Box,
  Grid,
  Divider,
  GridItem,
  useRadio,
  useRadioGroup,
  // Image
} from "@chakra-ui/react";
// import logo from "../../assets/images/shopaisley-logo.png";
import "@fontsource/poppins";
import "@fontsource/public-sans";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import CheckoutProduct from "../../../components/CheckoutProduct";
import AdvertHeader from "../../../components/AdvertHeader";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageLoader from "../../../components/PageLoader";
import { useGetAProductQuery } from "../../../store/slices/appSlice";

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
          borderColor: 'teal.600',
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


const Shipping = () => {
  const { productId }: { productId?: string } = useParams();
  const { data, isLoading, error } = useGetAProductQuery(productId || "");
  const navigate = useNavigate();
  const [selectedShipping, setSelectedShipping] = useState("");
  const [shippingPrice, setShippingPrice] = useState(0);
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
    defaultValue: selectedShipping, // Set the default value to the selectedShipping state
    onChange: (value) => handleShippingChange(value),
  });

  const group = getRootProps();

  const handleShippingChange = (value: string) => {
    setSelectedShipping(value);

    // Set the shipping price based on the selected option
    const selectedOption = options.find((option) => option.shippingType === value);
    if (selectedOption) {
      if (selectedOption.shippingType === "DHL Economy Shipping") {
        setShippingPrice(3000);
      } else if (selectedOption.shippingType === "DHL Express Shipping") {
        setShippingPrice(5000);
      }
    }
  };



  useEffect(() => {
    console.log(productId)
  }, [productId])

  if (isLoading) {
    return (<PageLoader />)
  }
  if (error || !data) {
    return <div>Error loading product details...</div>;
  }

  const product = data.data;


  const handleContinueToPayment = () => {
    // Navigate to the shipping page
    navigate(`/checkout/shipping/${productId}?productName=${encodeURIComponent(product.name)}&productPrice=${encodeURIComponent(product.unitPrice)}`);
  }
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
            <Flex {...group} height={"10%"} width={"100%"} gap={"20px"} flexDir={"column"} mb={"10%"}>
              {options.map((value) => (
                <RadioCard key={value.id} {...getRadioProps({ value: value.shippingType })}>
                  <Text mt={"1%"} mb={"1%"} ml={"5%"}>
                    <strong>{value.shippingType}</strong>
                  </Text>
                  <Text mt={"1%"} mb={"1%"} ml={"5%"}>{value.duration}</Text>
                </RadioCard>
              ))}
            </Flex>
            <Button
              buttonText="Continue to payment"
              onClick={handleContinueToPayment}
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
              productImage={product.ImageURL}
              productTitle={product.name}
              productSpecification={""}
              productQuantity="1"
              productPrice={product.unitPrice.toLocaleString()}
            />
            {/* <CheckoutProduct
              productImage={phone}
              productTitle="iPhone 15 Magsafe"
              productSpecification="Pink"
              productQuantity="1"
              productPrice="50,000"
            ></CheckoutProduct> */}
          </Box>
          <Box>
            <Flex h={"40px"} flexDirection={"row"} justify={"space-between"}>
              <Text >Subtotal</Text>
              <Text wordBreak={"break-word"} textAlign={"right"}>
                {/* {for product in p} */}
                {product.unitPrice}
                {/* {
                  let subtotal = 0;
        cartItems.forEach((item) => {
                  subtotal += item.price * item.quantity;
        });
                // Display the subtotal
                return <Text>Subtotal: NGN{subtotal.toLocaleString()}</Text>;
      } */}
              </Text>
            </Flex>
            <Flex h={"40px"} flexDirection={"row"} justify={"space-between"}>
              <Text >Shipping</Text>
              <Text
                wordBreak={"break-word"}
                textAlign={"right"}
                color={"#909090"}
              >
                {/* Calculated at the next step */}
                {shippingPrice}
              </Text>
            </Flex>
            <Divider
              h={"2px"}
              bgColor={"black"}
              mt={"-3px"}
              mb={"4px"}
            ></Divider>
            <Flex h={"40px"} flexDirection={"row"} justify={"space-between"}>
              <Text >Total</Text>
              <Text wordBreak={"break-word"} textAlign={"right"}>
                -
              </Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Shipping;


// import React, { useState } from "react";

// const Shipping = () => {
//   const [selectedShipping, setSelectedShipping] = useState(""); // State to store the selected shipping option
//   const [shippingPrice, setShippingPrice] = useState(0); // State to store the shipping price

//   const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedShipping(event.target.value); // Update the selected shipping option
//     // Set the shipping price based on the selected option
//     if (event.target.value === "option1") {
//       setShippingPrice(10); // Set the price for option1
//     } else if (event.target.value === "option2") {
//       setShippingPrice(15); // Set the price for option2
//     }
//   };

//   return (
//     // Your existing code...

//     <RadioCard
//       value="option1"
//       checked={selectedShipping === "option1"}
//       onChange={handleShippingChange}
//     >
//       Option 1
//     </RadioCard>

//     <RadioCard
//       value="option2"
//       checked={selectedShipping === "option2"}
//       onChange={handleShippingChange}
//     >
//       Option 2
//     </RadioCard>

//     // Your existing code...

//     <Flex h={"40px"} flexDirection={"row"} justify={"space-between"}>
//       <Text>Shipping</Text>
//       <Text wordBreak={"break-word"} textAlign={"right"} color={"#909090"}>
//         {shippingPrice} // Display the selected shipping price
//       </Text>
//     </Flex>

//     // Your existing code...
//   );
// };

// export default Shipping;
