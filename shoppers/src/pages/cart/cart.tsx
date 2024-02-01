<<<<<<< HEAD:shoppers/src/app/cart/page.tsx
import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Link as ChakraLink,
  Divider,
  Stack,
  Input,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  Accordion,
  InputGroup,
} from "@chakra-ui/react";
import logo from "@/assets/images/shopaisley-logo.png";
=======
import { Box,Flex, Text ,Grid , GridItem ,Link as ChakraLink, Divider, Stack, Input} from "@chakra-ui/react";
// import logo from "../../assets/images/shopaisley-logo.png";
>>>>>>> 9f476b6a8fbc952182abff4b2ac73cf1f02810ba:shoppers/src/pages/cart/cart.tsx
import "@fontsource/poppins";
import "@fontsource/public-sans";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryBox from "../../components/CategoryBox";
import SAButtons from "../../components/SAButton";
import CheckoutProduct from "@/components/CheckoutProduct";
import Link from "next/link";
import magsafe from "@/assets/images/gadgets/magsafe.jpeg";
import photo from "@/assets/images/gadgets/iphone.jpeg";
import AdvertHeader from "@/components/AdvertHeader";

<<<<<<< HEAD:shoppers/src/app/cart/page.tsx
const Page = () => {
  return (
    <Flex fontFamily={"Public Sans"} flexDir={"column"}>
      <AdvertHeader />
      <Header></Header>
      <Flex>
        <Grid templateColumns="repeat(2, 1fr)" h={"100%"} w={"100%"}>
          <GridItem h={"100%"} paddingLeft={"4%"} paddingRight={"4%"}>
            <Flex flexDir={"column"}>
              <Text fontSize={"200%"} paddingTop={"2%"}>
                <strong>Your cart</strong>
              </Text>
              <Text paddingTop={"2%"}>
                Not ready to checkout?{" "}
                <ChakraLink color={"#003EB6"} href={"/."}>
                  Continue Shopping
                </ChakraLink>
              </Text>
            </Flex>
            <Flex flexDir={"column"} marginTop={"4%"}>
              <CheckoutProduct
                productImage={photo}
                productTitle="iPhone 15"
                productSpecification="Pink"
                productQuantity="1"
                productPrice="1,050,000"
              ></CheckoutProduct>
              <CheckoutProduct
                productImage={magsafe}
                productTitle="iPhone 15 Magsafe"
                productSpecification="Pink"
                productQuantity="1"
                productPrice="50,000"
              ></CheckoutProduct>
            </Flex>
            <Flex marginTop={"10%"} flexDir={"column"}>
              <Text fontSize={"120%"}>
                <strong>Order Information</strong>
              </Text>
              <Accordion defaultIndex={[0]} allowMultiple mb={"20%"} mt={"2"} color={"#909090"}>
                <AccordionItem  borderStyle={"solid"} borderTopColor={"black"} >
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left"  ml={"-17px"}>
=======
const Cart =()=>{

    return(    
       <Box>
        <Header/>
        
        <Grid   
            templateAreas={`"cart ordersum"
                            "orderinfo blank" `}   
            gridTemplateRows={'100px 1fr 200px'}//height fractional unit width
            gridTemplateColumns={'594px 1fr'}
            h={"1000px"}
            gap = '100'
            pl='220px'
            
        >
       
         <GridItem   pt='22px'  area={'cart'}>
            <Text fontSize={30} as='b'>
                    Your Cart
            </Text>
            <Text>
            Not ready to checkout?<ChakraLink textDecoration="none" href="/" color={"#003EB6"}>
                Continue Shopping
            </ChakraLink>
            </Text>
            <Flex align="center" pt="21.34px" pb="15.33px">
                <CategoryBox categoryName={""} categoryImage={undefined}/>
                <Stack direction='column' p={"6.171px 5.143px"}>
                    <Text fontSize={"23px"}>
                        iPhone 15
                    </Text>
                    <Text fontSize={"14px"}>
                        Specification:250GB
                    </Text>
                    <Text fontSize={"14px"}>
                    Quantity : 1
                    </Text>
                    <Stack direction='row'> 
                        <Text fontSize={"23px"}> NGN 1,050,00</Text>
                        <ChakraLink textDecoration="none" href="/cart" pt="7px" pl="200px"> Remove </ChakraLink>
                    </Stack>
                </Stack>
            </Flex>
            <Divider orientation='horizontal' color={"#909090"} size={"20px"} borderWidth={"2px"} />
            <Flex align="center" pt="21.34px" pb="15.33px">
                <CategoryBox categoryName={""} categoryImage={undefined}/>
                <Stack direction='column' p={"6.171px 5.143px"}>
                    <Text fontSize={"23px"}>
                    iPhone 15 Magsafe Case
                    </Text>
                    <Text fontSize={"14px"}>
                        Specification:Pink
                    </Text>
                    <Text fontSize={"14px"}>
                    Quantity : 1
                    </Text>
                <Stack direction='row'> 
                    <Text fontSize={"23px"}> NGN 50,000</Text>
                    <ChakraLink textDecoration="none" href="/cart" pt="7px" pl="215px"> Remove </ChakraLink>
                    
                </Stack>
                </Stack>
            </Flex>
        </GridItem>
        <GridItem pl='100px' pt='65px'  area={'ordersum'}>
            <Stack direction={"column"}>
            <Text fontSize={"23px"} as='b' pb={"29px"}>
                Order Summary
            </Text>
            <Input placeholder="Enter coupon code here" w={"408px"} />
            <Stack direction={"row"} pt={"28px"}>
                <Text>
                    Subtotal
                </Text>
                <Text pl="240px">
                    NGN 1,100,00
                </Text>
            </Stack>
            <Stack direction={"row"} pt={"16px"} pb={"16px"}> 
                <Text> 
                    Shipping
                </Text>
                <Text pl="150px">
                    Calculated at the next step
                </Text>
            </Stack>
            <Divider orientation='horizontal' color={"#000"} borderWidth={"2px"} w={"408px"}/>
            <Stack direction={"row"} pt={"16px"} pb={"36px"}>
                <Text>
                    Total
                </Text>
                <Text pl="340px">
                    0.00
                </Text>
            </Stack>
            <SAButtons buttonText="Checkout" linkTo={"/checkout/shipping"}/>
            </Stack>
        </GridItem>
        <GridItem pt='331px' pb='105px'area={'orderinfo'}>
                <Text fontSize={"23px"} pb={"15px"} as={"b"}>
                    Order Infromation
                </Text>
                <Divider orientation="horizontal"/>
                <Stack direction={"row"}  pt={"16px"} pb={"11px"}>
                    <Stack direction={"column"}>
                    <Text fontSize={"12px"} pt={"11px"} >
>>>>>>> 9f476b6a8fbc952182abff4b2ac73cf1f02810ba:shoppers/src/pages/cart/cart.tsx
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                <Text >Subtotal</Text>
                <Text  wordBreak={"break-word"} textAlign={"right"}>
                  NGN1,100,000
                </Text>
              </Flex>
              <Flex h={"40px"} flexDirection={"row"} justify={"space-between"}>
                <Text >Shipping</Text>
                <Text 
                  wordBreak={"break-word"}
                  textAlign={"right"}
                  color={"#909090"}
                >
                  Calculated at the next step
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
                <Text  wordBreak={"break-word"} textAlign={"right"}>
                  -
                </Text>
              </Flex>
            </Box>
            <SAButtons buttonText="Continue to checkout" linkTo={"/checkout/address"}></SAButtons>
          </GridItem>
        </Grid>
<<<<<<< HEAD:shoppers/src/app/cart/page.tsx
      </Flex>
      <Footer></Footer>
    </Flex>
  );
};
export default Page;
=======

        <Footer/>

        </Box>
       
    )

}
export default Cart;
>>>>>>> 9f476b6a8fbc952182abff4b2ac73cf1f02810ba:shoppers/src/pages/cart/cart.tsx
