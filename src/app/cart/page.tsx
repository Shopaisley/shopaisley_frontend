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
import "@fontsource/poppins";
import "@fontsource/public-sans";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryBox from "@/components/CategoryBox";
import SAButtons from "../../components/SAButton";
import CheckoutProduct from "@/components/CheckoutProduct";
import Link from "next/link";
import magsafe from "@/assets/images/gadgets/magsafe.jpeg";
import photo from "@/assets/images/gadgets/iphone.jpeg";

const Page = () => {
  return (
    <Flex fontFamily={"Public Sans"} flexDir={"column"}>
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
            <SAButtons buttonText="Continue to checkout"></SAButtons>
          </GridItem>
        </Grid>
      </Flex>
      <Footer></Footer>
    </Flex>
  );
};
export default Page;
