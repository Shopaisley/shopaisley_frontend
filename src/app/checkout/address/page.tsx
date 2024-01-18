import LoginForm from "@/components/LoginForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/SAButton";
import magsafe from "@/assets/images/gadgets/magsafe.jpeg";
import photo from "@/assets/images/gadgets/iphone.jpeg";
import phone from "@/assets/images/gadgets/iphone.jpeg"
import ps5 from "@/assets/images/games/ps5.jpeg"
import {countries} from "@/app/checkout/address/countries"

import {
  Flex,
  Text,
  Link as ChakraLink,
  Box,
  Grid,
  Divider,
  GridItem,
  Input,
  InputGroup,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import logo from "@/assets/images/shopaisley-logo.png";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import Image from "next/image";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./index.css";
import CheckoutProduct from "@/components/CheckoutProduct";
import CatalogueProduct from "@/components/CatalogueProduct";

const Page = () => {
  return (
    <Flex fontFamily={"Public Sans"} flexDir={"column"}>
      <Header />
      <Flex>
      <Grid templateColumns="repeat(2, 1fr)" h={"100vh"}>
        <GridItem
          bgColor={"#EFF2F6"}
          h={"100%"}
          paddingLeft={"10%"}
          paddingRight={"10%"}
        >
          <Box display={"flex"} flexDir={"column"} h={"100px"} mt={"10%"}>
            <Text  fontSize={"230%"} h={"100%"}>
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
              <Text  fontSize={"100%"}>
                <strong>Address</strong>
              </Text>
              <Divider
                w={"20%"}
                h={"1px"}
                ml={"10px"}
                mr={"10px"}
                bgColor={"black"}
              ></Divider>
              <Text  fontSize={"100%"}>Shipping</Text>
              <Divider
                w={"20%"}
                h={"1px"}
                ml={"10px"}
                mr={"10px"}
                bgColor={"black"}
              ></Divider>
              <Text  fontSize={"100%"}>Payment</Text>
            </Flex>
          </Box>

          <Box h={"390px"} mt={"3%"} mb={"15%"}>
            <Text  fontSize={"150%"} mb={"10px"}>
              Shipping Information
            </Text>
            <InputGroup mb={"10px"}>
              <Input
                borderRadius={"0"}
                placeholder="First Name"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"49%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
              <Input
                borderRadius={"0"}
                placeholder="Last Name"
                ml={"2%"}
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"49%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <InputGroup mb={"10px"}>
              <Input
                borderRadius={"0"}
                placeholder="Address"
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
                placeholder="Apartment, suite, etc (optional)"
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
                placeholder="City"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <InputGroup mb={"10px"}>
              <Select
                borderRadius={"0"}
                placeholder="Country"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"30%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
                mr={"5%"}
                ml={"-1%"}
              >
                {countries.map((country) => (
                  <option
                    key={country.name}
                  >
                    {country.name}
                  </option>
                ))}
              </Select>
              <Input
                borderRadius={"0"}
                placeholder="City"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"30%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
                mr={"5%"}
              />
              <Input
                borderRadius={"0"}
                placeholder="Zipcode"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"31%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <InputGroup mb={"10px"}>
              <Input
                borderRadius={"0"}
                placeholder="Optional"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <Checkbox
              mt={"10px"}
              color={"#909090"}
              mb={"20px"}
              className="custom-checkbox"
            >
              Save contact information
            </Checkbox>
            <Button buttonText="Continue to Shipping"></Button>
          </Box>
        </GridItem>
        <GridItem
          bgColor={"#EFF2F6"}
          h={"100%"}
          paddingLeft={"10%"}
          paddingRight={"10%"}
        >
          <Box mt={"20%"}>
            <Text  color={"black"} mb={"20px"} fontSize={"120%"}>
              Your cart
            </Text>
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
            <InputGroup mb={"10px"}>
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
            <Box>
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
          </Box>
        </GridItem>
      </Grid>
      </Flex>
      <Footer/>
    </Flex>
  );
};

export default Page;
