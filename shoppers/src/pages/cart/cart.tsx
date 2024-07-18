/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Link as ChakraLink,
  Divider,
  Input,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  Accordion,
  InputGroup,
} from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import Footer from "../../components/Footer";
import SAButtons from "../../components/SAButton";
import CheckoutProduct from "../../components/CheckoutProduct";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { server } from "../../services/server";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Page = () => {
  const navigate = useNavigate();
  const [cartList, setCartList] = useState<any[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const orderId = localStorage.getItem('order_id');
      if (!orderId) return;

      try {
        const response = await axios.get(`${server}/order/${orderId}`);
        const orderItems = response.data.data.order_items;

        const cartItems = await Promise.all(
          orderItems.map(async (item: any) => {
            const { data } = await axios.get(`${server}/product/${item.product_id}`);
            return {
              id: item.product_id,
              image: data.data.ImageURL,
              title: data.data.name,
              quantity: item.quantity,
              price: item.price,
            };
          })
        );

        setCartList(cartItems);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCartItems();
  }, []);

  const handleCheckout = () => {
    const cartParams = cartList.map(item => 
      `id=${item.id}&image=${encodeURIComponent(item.image)}&title=${encodeURIComponent(item.title)}&quantity=${item.quantity}&price=${item.price}`
    ).join('&');
    navigate(`/checkout/address?${cartParams}`);
  };

  const calculateSubtotal = (cartList: any[]) => {
    return cartList.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const subtotal = useMemo(() => calculateSubtotal(cartList), [cartList]);

  return (
    <Flex fontFamily={"Public Sans"} flexDir={"column"}>
      <Box position="sticky" zIndex={100} top={0}>
        <Navbar />
      </Box>
      <Flex>
        <Grid templateColumns="repeat(2, 1fr)" h={"100%"} w={"100%"}>
          <GridItem h={"100%"} paddingLeft={"4%"} paddingRight={"4%"}>
            <Flex flexDir={"column"}>
              <Text fontSize={"200%"} paddingTop={"2%"}>
                <strong>Your cart</strong>
              </Text>
              <Text paddingTop={"2%"}>
                Not ready to checkout?{" "}
                <ChakraLink color={"#003EB6"} href={"/"}>
                  Continue Shopping
                </ChakraLink>
              </Text>
            </Flex>
            <Flex flexDir={"column"} marginTop={"4%"}>
              {cartList.map((cartItem, index) => (
                  <CheckoutProduct
                    key={index}
                    productImage={cartItem.image}
                    productTitle={cartItem.title}
                    productSpecification=""
                    productQuantity={cartItem.quantity}
                    productPrice={cartItem.price}
                  />
              ))}
            </Flex>
            <Flex marginTop={"10%"} flexDir={"column"}>
              <Text fontSize={"120%"}>
                <strong>Order Information</strong>
              </Text>
              <Accordion defaultIndex={[0]} allowMultiple mb={"20%"} mt={"2"} color={"#909090"}>
                <AccordionItem borderStyle={"solid"} borderTopColor={"black"}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" ml={"-17px"}>
                        Return Policy
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} ml={"-17px"} w={"90%"}>
                    This is our example return policy which is everything you need to know about our returns.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" ml={"-17px"}>
                        Shipping Options
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} ml={"-17px"} w={"90%"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </GridItem>
          <GridItem h={"100%"} paddingLeft={"30%"} paddingRight={"10%"} flexDir={"column"}>
            <Text fontSize={"120%"} mt={"14%"}>
              <strong>Order Summary</strong>
            </Text>
            <InputGroup mb={"10px"} mt={"30px"} w={"100%"}>
              <Input
                borderRadius={"0"}
                placeholder="Enter coupon code here"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <Box w={"100%"} mt={"7%"} mb={"3%"}>
              <Flex h={"40px"} flexDirection={"row"} justify={"space-between"}>
                <Text>Subtotal</Text>
                <Text wordBreak={"break-word"} textAlign={"right"}>
                  NGN{subtotal.toLocaleString()}
                </Text>
              </Flex>
              <Flex h={"40px"} flexDirection={"row"} justify={"space-between"}>
                <Text>Shipping</Text>
                <Text wordBreak={"break-word"} textAlign={"right"} color={"#909090"}>
                  Calculated at the next step
                </Text>
              </Flex>
              <Divider h={"2px"} bgColor={"black"} mt={"-3px"} mb={"4px"}></Divider>
              <Flex h={"40px"} flexDirection={"row"} justify={"space-between"}>
                <Text>Total</Text>
                <Text wordBreak={"break-word"} textAlign={"right"}>
                  NGN{subtotal.toLocaleString()}
                </Text>
              </Flex>
            </Box>
            <SAButtons buttonText="Continue to checkout" onClick={handleCheckout} />
          </GridItem>
        </Grid>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Page;
