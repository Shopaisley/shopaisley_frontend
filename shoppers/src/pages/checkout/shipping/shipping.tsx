/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import flutter from "../../../assets/images/flutter.webp";
import photo from "../../../assets/images/paystack.png";
import CheckoutProduct from "../../../components/CheckoutProduct";
import Footer from "../../../components/Footer";
import PageLoader from "../../../components/PageLoader";
import Button from "../../../components/SAButton";
import { useGetAProductQuery } from "../../../store/slices/appSlice";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Navbar from "../../../components/Navbar";
import { isAuthenticated } from "../../../services/authService";
import { api, proServer, server } from "../../../services/server";

// interface Product {
//   name: string;
//   price: number;
//   image_url: string;
//   description: string;
// }

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "#EFF2F6",
          color: "black",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
          bg: "#EFF2F6",
          color: "black",
          borderColor: "#EFF2F6",
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
  // const [data, setData] = useState<Product | null>(null);
  const navigate = useNavigate();
  const [selectedShipping, setSelectedShipping] = useState("");
  const [shippingPrice, setShippingPrice] = useState(0);
  const [searchParams] = useSearchParams();
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(true);
  const [selectedGateway, setSelectedGateway] = useState("");

  const options = [
    {
      id: 0,
      shippingType: "DHL Economy Shipping",
      duration: "3-5 Business Days",
    },
    {
      id: 1,
      shippingType: "DHL Express Shipping",
      duration: "1-2 Business Days",
    },
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: selectedShipping, // Set the default value to the selectedShipping state
    onChange: (value) => handleShippingChange(value),
  });

  const group = getRootProps();

  const handleShippingChange = (value: string) => {
    setSelectedShipping(value);

    // Set the shipping price based on the selected option
    const selectedOption = options.find(
      (option) => option.shippingType === value
    );
    if (selectedOption) {
      if (selectedOption.shippingType === "DHL Economy Shipping") {
        setShippingPrice(1000);
      } else if (selectedOption.shippingType === "DHL Express Shipping") {
        setShippingPrice(3000);
      }
    }
  };
  const product = data.data

  const quantity = parseInt(searchParams.get("quantity") || "1", 10);

  const subtotal = (product?.unitPrice ?? 0) * quantity;
  const total = subtotal + shippingPrice;

 

  // useEffect(() => {
  //   let isMounted = true;

  //   const fetchProduct = async () => {
  //     try {
  //       const response = await axios.get(`${proServer}/product/${productId}`);
  //       if (isMounted) {
  //         if (response.data) {
  //           setData(response.data);
  //           console.log(response.data);
  //         } else {
  //           setError("No data received");
  //         }
  //       }
  //     } catch (err) {
  //       if (isMounted) {
  //         setError("Error loading product details");
  //       }
  //     } finally {
  //       if (isMounted) {
  //         setIsLoading(false);
  //       }
  //     }
  //   };

  //   fetchProduct();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [productId]);

  if (isLoading) {
    return <PageLoader />;
  }
  if (error || !data) {
    return <div>Error loading product details...</div>;
  }

  const handleContinueToPayment =  () => {
    // Navigate to the shipping page
    // navigate(`/checkout/payment/${productId}?productName=${encodeURIComponent(product.name)}&productPrice=${encodeURIComponent(product.unitPrice)}`);
    navigate('/success')
    if (isAuthenticated()) {
      const token = localStorage.getItem("authToken");
      // const orderId = localStorage.getItem("order_id");
      // console.log("Token:", token);
      // const decoded: any = jwtDecode(token || "");
      // console.log("Decoded token:", decoded); // Add this line to debug
      // const userId = decoded?.id;
      // console.log("User ID:", userId);

      // try {
      //   const response = await axios.post(
      //     `${server}/paymenent/initialize`
      //   )
      //    // Create the order
      //   const orderResponse = axios.post(
      //     `${server}/checkOut/${orderId}`,
      //     {
      //       status: "true",
      //       total: total
      //     })

      // } catch (error) {
      //   console.error("Error during payment initialization:", error);
      //   // setError("Error initializing payment");
      // }
      

    //   try {
    //     // Create the order
    //     const orderResponse = await axios.post(
    //       `${api}/order`,
    //       {
    //         userId: userId, // Replace with actual userId from context or state
    //         orderItems: [
    //           {
    //             productId: productId,
    //             quantity: quantity,
    //             price: data.price,
    //           },
    //         ],
    //       },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );

    //     const order = orderResponse.data;
    //     console.log("Order:", order);

    //     if (selectedGateway === "paystack") {
    //       // Initialize Paystack payment
    //       const paymentResponse = await axios.post(
    //         `${api}/payment/initialize`,
    //         {
    //           orderId: order.id,
    //           email: decoded?.email,
    //           amount: total,
    //           callback_url: `${window.location.origin}/success`,
    //         },
    //         {
    //           headers: {
    //             Authorization: `Bearer ${token}`,
    //             "Content-Type": "application/json",
    //           },
    //         }
    //       );

    //       console.log("Payment Response:", paymentResponse);

    //       if (paymentResponse) {
    //         console.log("Payment Data:", paymentResponse.data);
    //         window.location.href =
    //           paymentResponse.data.paymentData.data.authorization_url;
            
    //         const ref = paymentResponse.data.paymentData.data.reference
    //         const ordId = paymentResponse.data.orderId

    //         const verifyPayment = await axios.post(
    //           `${api}/payment/verify/${ref}/${ordId}`,
    //           {
    //             headers: {
    //               Authorization: `Bearer ${token}`,
    //               "Content-Type": "application/json",
    //             },
    //           }
    //         );
    //         console.log(verifyPayment.data)
    //         if (verifyPayment.data === "Payment successful and order completed") {
    //           console.log("Payment Verified");
    //           navigate("/success");
    //         } else {
    //           setError("Error verifying payment");
    //         }
    //       } else {
    //         setError("Error initializing payment");
    //       }
    //     }
    //   } catch (error) {
    //     console.error("Error during payment initialization:", error);
    //     setError("Error initializing payment");
    //   }
    } else {
      // Redirect to login page if user is not authenticated
      navigate("/login");
    }
  };

  return (
    <Box fontFamily={"'Value Sans Pro', 'Public Sans'"}>
      <Box position="sticky" zIndex={100} top={0}>
        <Navbar />
      </Box>
      <Flex
        // gap={"2vw"}
        flexDir={"column"}
        h={"90vh"}
        bg={"#EFF2F6"}
        paddingLeft={"10%"}
        paddingRight={"10%"}
      >
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem
            // bgColor={"#EFF2F6"}
            h={"100%"}
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
              <Flex
                {...group}
                height={"10%"}
                width={"100%"}
                gap={"20px"}
                flexDir={"column"}
                mb={"10%"}
              >
                {options.map((value) => (
                  <RadioCard
                    key={value.id}
                    {...getRadioProps({ value: value.shippingType })}
                  >
                    <Text mt={"1%"} mb={"1%"} ml={"5%"}>
                      <strong>{value.shippingType}</strong>
                    </Text>
                    <Text mt={"1%"} mb={"1%"} ml={"5%"}>
                      {value.duration}
                    </Text>
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
                productQuantity={quantity.toString()}
                productPrice={product.unitPrice.toLocaleString()}
              />
            </Box>
            <Box>
              <Flex h={"40px"} flexDirection={"row"} justify={"space-between"}>
                <Text>Subtotal</Text>
                <Text wordBreak={"break-word"} textAlign={"right"}>
                  {/* {for product in p} */}
                  {subtotal.toLocaleString()}
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
                <Text>Shipping</Text>
                <Text
                  wordBreak={"break-word"}
                  textAlign={"right"}
                  color={"#909090"}
                >
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
                <Text>Total</Text>
                <Text wordBreak={"break-word"} textAlign={"right"}>
                  ₦{total.toLocaleString()}
                </Text>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
        <Flex flexDir={"column"} h={"10%"} w={"100%"} mt={"5%"}>
          <Text fontSize={"20px"} fontWeight={500}>
            Payment Gateway
          </Text>
          <Divider w={"100%"} h={"10px"} mt={"10px"} mb={"10px"} bg={"black"} />
          <Flex
            flexDir={"row"}
            // justify={"space-between"}
            w={"100%"}
            mt={"2%"}
            gap={"20px"}
          >
            <Box
              h={"39.46px"}
              // border={"1px solid grey"}
              w={"15%"}
              pt={"10px"}
              bgColor={"white"}
              borderRadius={"6px"}
              box-shadow={"1px 1px 4px 0px rgba(0, 0, 0, 0.25)"}
              border={
                selectedGateway === "paystack"
                  ? "1px solid blue"
                  : "1px solid grey"
              }
            >
              <center>
                <Image
                  src={photo}
                  alt="paystack"
                  width={89}
                  cursor={"pointer"}
                  onClick={() => {
                    setSelectedGateway("paystack");
                  }}
                />
              </center>
            </Box>
            <Box
              h={"39.46px"}
              w={"15%"}
              border={"1px solid grey"}
              pt={"10px"}
              bgColor={"white"}
              borderRadius={"6px"}
              box-shadow={"1px 1px 4px 0px rgba(0, 0, 0, 0.25)"}
            >
              <center>
                <Image src={flutter} alt="flutter" width={100}></Image>
              </center>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Shipping;
//shipping page final
