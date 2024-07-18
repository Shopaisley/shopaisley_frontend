/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../services/server";
import "@fontsource/public-sans";
import "@fontsource/poppins";
import cart from "../../assets/icons/shopping-cart.svg";
// import { useGetAProductQuery } from "../../store/slices/appSlice";
import { jwtDecode } from "jwt-decode";
import PageLoader from "../PageLoader";
import { isAuthenticated } from "../../services/authService";
import {
  FaMinus,
  FaPlus,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { useGetAProductQuery } from "../../store/slices/appSlice";

interface ProductViewProps {}

const ProductView: FC<ProductViewProps> = () => {
  const { productId } = useParams();
  // const [product, setProduct] = useState<Product | null>(null);
  const [itemCount, setItemCount] = useState(1);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState("");
  // const [data, setData] = useState<Product | null>(null);
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetAProductQuery(productId || "");
  useEffect(() => {
    // const fetchProduct = async () => {
    //   try {
    //     const response = await axios.get(`${server}/product/${productId}`);
    //     console.log(response);
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
    console.log(productId);
  }, [productId]);

  if (isLoading) {
    return <PageLoader />;
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
  const handleAddToCart = async (product: any) => {
    const orderId = localStorage.getItem("order_id");
    if (isAuthenticated()) {
      try {
        const token = localStorage.getItem("authToken");
        console.log(token);
        const decoded: any = jwtDecode(token || "");
        console.log("Decoded token:", decoded); // Add this line to debug
        const userId = decoded?.id;
        console.log(userId); // Ensure userId is being extracted correctly
        if (!userId) {
          throw new Error("User ID is not available in the token");
        }
        const response = await axios.post(
          // `${server}/cart/${userId}/item`,
          `${server}/order`,
          {
            order_id: orderId,
            product_id: productId, // Replace with the actual product ID
            price: data.data.unitPrice,
            quantity: itemCount, // You may adjust the quantity based on your requirements
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Check if the response has data before parsing
        if (response.data) {
          // Handle the response as needed
          console.log(response.data);
        } else {
          console.error("Empty response received");
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
        console.log(product.id);
      }
    } else {
      // User is not authenticated, create a new cart and store in localStorage
      const cart = JSON.parse(localStorage.getItem("cart") ?? "") || [];

      console.log(cart);
      const localCartItem = {
        productId: product.id,
        price: product.price,
        quantity: itemCount,
      };
      cart.push(localCartItem);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  const handleBuyNow = () => {
    // Navigate to the checkout page with product details and price
    navigate(
      `/checkout/address/${productId}?productName=${encodeURIComponent(
        data.name
      )}&productPrice=${encodeURIComponent(data.price)}&quantity=${itemCount}`
    );
  };
  return (
    <Flex
      fontFamily={"Mulish"}
      flexDir={"row"}
      mt={"4rem"}
      px={"5vw"}
      // bg={"#ffffff"}
      justifyContent={"space-between"}
      alignContent={"center"}
      borderRadius={"6px"}
    >
      <Box
        h={"490px"}
        bg={"#ffffff"}
        w={"450px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          w={"80%"}
          h={"80%"}
          src={data.data.ImageURL}
          alt="Product Image 1"
          mb={2}
        />
      </Box>
      <Box
        bg={"#ffffff"}
        w={"490px"}
        h={"490px"}
        px={"20px"}
        alignContent={"center"}
      >
        <Text
          fontSize={"2.14rem"}
          fontFamily={"Value Sans Pro"}
          fontWeight={500}
          mb={"0.5rem"}
          color={"black"}
          lineHeight={"49.371px"}
          letterSpacing={"-1.111px"}
        >
          {data.data.name}
        </Text>
        <Flex flexDir={"row"} gap={"10px"} alignItems={"center"} mb={"0.5rem"}>
          <Flex flexDir={"row"} gap={"2px"}>
            <Icon as={FaStar} w={"14px"} color={"#b27e27"} />
            <Icon as={FaStar} w={"14px"} color={"#b27e27"} />
            <Icon as={FaStar} w={"14px"} color={"#b27e27"} />
            <Icon as={FaStarHalfAlt} w={"14px"} color={"#b27e27"} />
            <Icon as={FaRegStar} w={"14px"} color={"#b27e27"} />
          </Flex>
          <Text
            fontSize={"14px"}
            letterSpacing={"-0.525px"}
            fontWeight={400}
            color={"black"}
            opacity={0.5}
          >
            (2,000 ratings)
          </Text>
        </Flex>
        <Text
          fontSize={"1.3rem"}
          fontWeight={600}
          color={"black"}
          lineHeight={"37.029px"}
          letterSpacing={"-0.741px"}
        >
          ₦{data.data.price?.toLocaleString()}
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
          {/* {data.retailer} */}
        </Text>

        <Text
          mt={"16.94px"}
          lineHeight={"24.686px"}
          fontSize={"15px"}
          fontWeight={400}
          color={"black"}
          mb={"43.42px"}
        >
          {data.data.description}
        </Text>

        <Flex w={"25vw"} flexDir={"row"} justify={"space-between"}>
          <Flex w={"12vw"} flexDir={"row"} alignContent={"center"}>
            <Button
              as={FaMinus}
              onClick={handleDecrement}
              w={"60px"}
              color={"#04101D"}
              bg={"#889FBA"}
              borderTop={"#000 solid 0.2px"}
              borderBottom={"#000  solid 0.2px"}
              borderLeft={"#000 solid 0.2px"}
              pl={"1rem"}
              borderRadius={0}
              cursor={"pointer"}
            />
            <Input
              value={itemCount}
              onChange={(e) => setItemCount(Number(e.target.value))}
              color={"black"}
              bg={"white"}
              outline={"none"}
              border={"none"}
              fontSize={"1rem"}
              borderTop={"#000 solid 0.2px"}
              borderBottom={"#000 solid 0.2px"}
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
              as={FaPlus}
              w={"60px"}
              color={"#04101D"}
              bg={"#889FBA"}
              mb={"1rem"}
              border={"none"}
              borderTop={"#000 solid 0.2px"}
              borderBottom={"#000 solid 0.2px"}
              borderRight={"#000 solid 0.2px"}
              pr={"1rem"}
              borderRadius={0}
              cursor={"pointer"}
            />
          </Flex>
          {/* Box for item count */}
        </Flex>
        {/* Buttons to add to cart and process order */}
        <Flex w={"25vw"} flexDir={"row"} justify={"space-between"} mt={"1rem"}>
          <Button
            w={"12vw"}
            border={"1.029px solid rgba(13, 13, 13, 0.49)"}
            fontWeight={500}
            fontSize={"15px"}
            lineHeight={"22.629px"}
            letterSpacing={"-0.411px"}
            color={"#ffffff"}
            p={"1.3rem"}
            bg={"#04101D"}
            borderRadius={"2px"}
            _hover={{
              bg: "#09203B",
              color: "#ffffff",
            }}
            boxShadow={"rgba(0, 0, 0, 0.2) 0px 4px 8px 0px"}
            onClick={handleAddToCart}
          >
            <Flex w={"100%"} flexDir={"row"} gap={"10px"} align={"center"}>
              <Icon as={Image} src={cart} h={"16px"} w={"16px"} />
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
              color: "#ffffff",
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
