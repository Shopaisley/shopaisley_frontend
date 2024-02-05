/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Flex, Input, Select, Text, Image, Icon } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../services/server";
import "@fontsource/public-sans";
import "@fontsource/poppins";
import cart from "../../assets/icons/shopping-cart.svg";
import { useGetAProductQuery } from "../../store/slices/appSlice";
import PageLoader from "../PageLoader";

interface ProductViewProps { }

const ProductView: FC<ProductViewProps> = () => {
  const { productId } = useParams();
  // const [product, setProduct] = useState<Product | null>(null);
  const [itemCount, setItemCount] = useState(1);
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetAProductQuery(productId || "");
    useEffect(() => {
    console.log(productId)
  }, [productId])
  if (isLoading) {
    return (<PageLoader />)   
  }

  if (error || !data) {
    return <div>Error loading product details...</div>;
  }

  const handleIncrement = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (itemCount > 1) {
      setItemCount((prevCount) => prevCount - 1);
    }
  };
  const handleAddToCart = async () => {
    try {
      // Fetch the number of cart items for the user from the DB
      const response = await axios.get(`${server}/cart/items/count`);
      const cartItemCount = response.data.count;

      // Update the cart item number in the DB
      await axios.put(`${server}/cart/items/count`, { count: cartItemCount + 1 });

      // Optionally, you can show a success message or perform any other actions after updating the cart item number
      console.log('Cart item number updated successfully!');
    } catch (error) {
      console.error('Error updating cart item number:', error);
    }
  };
  const handleBuyNow = () => {
    // Navigate to the checkout page with product details and price
    navigate(`/checkout/address/${productId}?productName=${encodeURIComponent(data.data.name)}&productPrice=${encodeURIComponent(data.data.unitPrice)}&quantity=${itemCount}`);
  };
  //   const handleBuyNow = () => {
  //   // Navigate to the checkout page with product details and price
  //   navigate(`/checkout/address?productId=${encodeURIComponent(productId || "")}&productName=${encodeURIComponent(data.data.name)}&productPrice=${encodeURIComponent(data.data.unitPrice)}&quantity=${itemCount}`);
  // };
  return (
    <Flex
      fontFamily={"Public Sans"}
      flexDir={"row"}
      mt={"4rem"}
      px={"5vw"}
      bg={"#ffffff"}
      justifyContent={"space-between"}
      alignContent={"center"}
      borderRadius={"6px"}
    >
      <Box h={"490px"} w={"420px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Image w={"80%"} h={"80%"} src={data.data.ImageURL} alt="Product Image 1" mb={2} />
      </Box>
      <Box mt={"60px"}>
        <Text fontSize={"2.314rem"} fontWeight={600} mb={"1rem"} color={"black"} lineHeight={"49.371px"} letterSpacing={"-1.111px"}>
          {data.data.name}
        </Text>
        <Text fontSize={"1.4rem"} fontWeight={400} color={"black"} lineHeight={"37.029px"} letterSpacing={"-0.741px"}>
          ₦{data.data.unitPrice.toLocaleString()}
        </Text>
        <Text
          color={"grey"}
          fontSize={"17.486px"}
          lineHeight={"24.686px"}
          letterSpacing={"-0.525px"}
          fontWeight={400}
          opacity={0.5}
          mb={4}
        >
          {data.data.retailer}
        </Text>

        <Text mt={"16.94px"} lineHeight={"24.686px"} fontSize={"17.486px"} fontWeight={400} color={"black"} mb={"43.42px"}>
          {data.data.description}
        </Text>

        <Flex
          w={"25vw"}
          flexDir={"row"}
          justify={"space-between"}
        // h={"54.389px"}
        // border={"1.029px solid #000"}
        >
          <Flex
            w={"12vw"}
            flexDir={"row"}
          >
            <Button
              onClick={handleDecrement}
              color={"grey"}
              bg={"white"}
              // mb={"1rem"}
              // border={"none"}
              borderTop={"#000 solid 0.2px"}
              borderBottom={"#000  solid 0.2px"}
              borderLeft={"#000 solid 0.2px"}
              fontSize={"1.2rem"}
              pl={"1rem"}
              py={"1.5rem"}
              borderRadius={0}
            >
              -
            </Button>
            <Input
              value={itemCount}
              onChange={(e) => setItemCount(Number(e.target.value))}
              // w="150px"
              color={"black"}
              bg={"white"}
              outline={"none"}
              border={"none"}
              fontSize={"1rem"}
              borderTop={"#000 solid 0.2px"}
              borderBottom={"#000 solid 0.2px"}
              py={"1.5rem"}
              textAlign="center"
              isReadOnly
              mb={"1rem"}
              borderRadius={0}
              _hover={{
                border: "none",
              }}
            />
            <Button
              onClick={handleIncrement}
              color={"grey"}
              bg={"white"}
              mb={"1rem"}
              border={"none"}
              borderTop={"#000 solid 0.2px"}
              borderBottom={"#000 solid 0.2px"}
              borderRight={"#000 solid 0.2px"}
              fontSize={"1.2rem"}
              pr={"1rem"}
              borderRadius={0}
              py={"1.5rem"}
            // opacity={0.5}
            >
              +
            </Button>
          </Flex>

          <Select
            w={"10vw"}
            h={"3.2rem"}
            placeholder="Select Option"
            _placeholder={{ color: "black" }}
            borderRadius={"0px"}
            // ml={"4.4rem"}
            bg={"#fff"}
            fontSize={"0.9rem"}
            title="Select Option"
          >
            <option value="option1" color={"black"}>
              Option 1
            </option>
            <option value="option2" color={"black"}>
              Option 2
            </option>
            <option value="option3" color={"black"}>
              Option 3
            </option>
          </Select>

          {/* Box for item count */}
        </Flex>
        {/* Buttons to add to cart and process order */}
        <Flex
          w={"25vw"}
          flexDir={"row"}
          justify={"space-between"}
          mt={"1rem"}
        >
          <Button
            w={"12vw"}
            border={"1.029px solid rgba(13, 13, 13, 0.49)"}
            fontWeight={500}
            fontSize={"15px"}
            lineHeight={"22.629px"}
            letterSpacing={"-0.411px"}
            color={"#ffffff"}
            p={"1.3rem"}
            bg={"rgba(13, 13, 13, 0.60)"}
            borderRadius={"2px"}
            _hover={{
              bg: "rgba(0, 0, 0, 0.60)",
              color: "#ffffff"
            }}
            boxShadow={"rgba(0, 0, 0, 0.2) 0px 4px 8px 0px"}
            onClick={handleAddToCart}
          >
            <Flex
              w={"100%"}
              flexDir={"row"}
              gap={"10px"}
              align={"center"}
            >
              <Icon
                as={Image}
                src={cart}
                h={"16px"}
                w={"16px"}
              />
              ADD TO CART
            </Flex>
          </Button>
          <Button
            w={"10vw"}
            bg={"#3E6FED"}
            fontWeight={500}
            fontSize={"15px"}
            lineHeight={"22.629px"}
            letterSpacing={"-0.411px"}
            color={"#ffffff"}
            p={"1.3rem"}
            borderRadius={"2px"}
            border={"1.029px solid #003EB6"}
            _hover={{
              bg: "#003EB6",
              color: "#ffffff"
            }}
            boxShadow={"rgba(0, 0, 0, 0.2) 0px 4px 8px 0px"}
            onClick={handleBuyNow}
          >
            BUY NOW
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductView;

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await axios.get(`${server}/product/${productId}`);
  //       setProduct(response.data.data);
  //     } catch (error) {
  //       console.error('Error fetching product details:', error);
  //     }
  //   };

  //   fetchProduct();
  // }, [productId]);

  // interface Product {
//   id: string;
//   ImageURL: string;
//   name: string;
//   retailer: string;
//   unitPrice: number;
//   description: string; // Add a description property
// }