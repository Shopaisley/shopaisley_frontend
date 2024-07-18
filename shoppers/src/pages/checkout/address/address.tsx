/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "../../../components/Footer";
import Button from "../../../components/SAButton";
import {
  Flex,
  Text,
  Box,
  Divider,
  Input,
  InputGroup,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import "./index.css";
import CheckoutProduct from "../../../components/CheckoutProduct";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGetAProductQuery } from "../../../store/slices/appSlice";
import PageLoader from "../../../components/PageLoader";
import { useEffect, useState } from "react";
import { proServer, api } from "../../../services/server";
import Navbar from "../../../components/Navbar";

const Address = () => {
  const { productId }: { productId?: string } = useParams();
  const { data, isLoading, error } = useGetAProductQuery(productId || "");
  // const [data, setData] = useState<any[]>([]);
  const [city, setCity] = useState("Lagos");
  const [zipcode, setZipcode] = useState("100101");
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");
  const [searchParams] = useSearchParams();
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(true);

  const handleCountryChange = (event: any) => {
    setSelectedCountry(event.target.value);
  };

  const product = data.data;

  useEffect(() => {
    console.log(productId);
    // const fetchProduct = async () => {
    //   try {
    //     const response = await axios.get(`${proServer}/product/${productId}`);
    //     console.log(response)
    //     if (response.data) {
    //       setData(response.data);
    //     } else {
    //       setError("No data received");
    //     }
    //   } catch (error) {
    //     setError("Error loading product details");
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchProduct();
  }, [productId]);
  

  const quantity = parseInt(searchParams.get("quantity") || "1", 10);

  const subtotal = data.price * quantity;

  if (isLoading) {
    return <PageLoader />;
  }
  if (error || !data) {
    return <div>Error loading product details...</div>;
  }

  const handleContinueToSHipping = () => {
    // Navigate to the shipping page
    navigate(
      `/checkout/shipping/${productId}?productName=${encodeURIComponent(
        product.name
      )}&productPrice=${encodeURIComponent(
        product.unitPrice
      )}&quantity=${quantity}`
    );
  };
  return (
    <Flex
      fontFamily={"Mulish"}
      bg={"#E2E8F0"}
      color={"#000000"}
      flexDir={"column"}
    >
      <Box position="sticky" zIndex={100} top={0}>
        <Navbar />
      </Box>
      <Flex
        flexDir={"column"}
        w="100%"
        mb={"1.5%"}
        mt={"1%"}
        px={"8vw"}
        justifyContent="space-between"
      >
        <Flex flexDir={"column"}>
          <Box display={"flex"} flexDir={"column"} h={"100px"}>
            <Text fontSize={"230%"} h={"100%"}>
              <strong>Checkout</strong>
            </Text>
            <Flex
              flexDir={"row"}
              align={"center"}
              h={"100%"}
              w={"50%"}
              display={"flex"}
              position={"relative"}
            >
              <Text fontSize={"100%"}>
                <strong>Address</strong>
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
              <Text fontSize={"100%"}>Payment</Text>
            </Flex>
          </Box>
          <Flex w={"100%"} flexDir={"row"} justifyContent={"space-between"}>
            <Box h={"55vh"} mt={"3%"} bg={"#ffffff"} mb={"15%"} p={"30px"} borderRadius={"6px"}>
              <Text fontSize={"150%"} mb={"10px"}>
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
                  placeholder="Hostel"
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
                  placeholder="Block, Room, etc (optional)"
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
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  disabled
                >
                  <option value="Nigeria">Nigeria</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
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
                  value={city}
                  disabled
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
                  value={zipcode}
                  disabled
                />
              </InputGroup>
              <InputGroup mb={"10px"}>
                <Input
                  borderRadius={"0"}
                  placeholder="Additional Information"
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
            </Box>
            <Box w={"30vw"} mt={"2%"}>
              <Text color={"black"} mb={"20px"} fontSize={"120%"}>
                Your cart
              </Text>
              <Box bg={"#fff"} p={"30px"} borderRadius={"6px"} mb={"25px"}>
                {/* {console.log(product)} */}
                <CheckoutProduct
                  productImage={product.ImageURL}
                  productTitle={product.name}
                  productSpecification={""}
                  productQuantity={quantity.toString()}
                  productPrice={product.unitPrice.toLocaleString()}
                />
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
                  <Flex
                    h={"40px"}
                    flexDirection={"row"}
                    justify={"space-between"}
                  >
                    <Text>Subtotal</Text>
                    <Text wordBreak={"break-word"} textAlign={"right"}>
                      {/* {for product in p} */}
                      ₦{subtotal.toLocaleString()}
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
                  <Flex
                    h={"40px"}
                    flexDirection={"row"}
                    justify={"space-between"}
                  >
                    <Text>Shipping</Text>
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
                  <Flex
                    h={"40px"}
                    flexDirection={"row"}
                    justify={"space-between"}
                  >
                    <Text>Total</Text>
                    <Text wordBreak={"break-word"} textAlign={"right"}>
                      -
                    </Text>
                  </Flex>
                </Box>
              </Box>
              <Button
                onClick={handleContinueToSHipping}
                buttonText="Continue to Shipping"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Address;
