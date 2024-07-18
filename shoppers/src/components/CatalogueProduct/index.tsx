/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { server } from "../../services/server";
import { isAuthenticated } from "../../services/authService";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
// import { jwtDecode } from "jwt-decode";

interface CatalogueProductProps {
  productID: string;
  productImage: any;
  productTitle: string;
  Retailer: string;
  productPrice: number;
}

const CatalogueProduct: FC<CatalogueProductProps> = ({
  productID,
  productImage,
  productTitle,
  Retailer,
  productPrice,
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleProductClick = (productId: string) => {
    const path = `/product/${productId}`;
    navigate(path);
  };

  const handleAddToCart = async (product: any, event: React.MouseEvent) => {
    event.stopPropagation();
    const order_id = localStorage.getItem("order_id");
    console.log(order_id)
    if (isAuthenticated()) {
      try {
        const token = localStorage.getItem("authToken") || "";
        // const decode = jwtDecode(token)
        console.log(product)
        console.log(product.id)
        console.log(product.price)
        const response = await axios.patch(
          `${server}/order`,
          {
            order_id: order_id,
            product_id: product.id,
            price: product.price,
            quantity: 1,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data)

        if (response.data) {
          console.log(response.data);
          toast.success("Product added to cart successfully");
        } else {
          console.error("Empty response received");
          toast.error("Error: Empty response received");
        }
      } catch (error: any) {
        console.error("Error adding to cart:", error);
        console.log(error.response?.data);
        toast.error(`Error adding to cart: ${error.message}`);
      }
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
      const localCartItem = {
        product_id: product.id,
        price: product.price,
        quantity: 1,
      };
      cart.push(localCartItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Product added to cart successfully");
    }
  };

  const handleHeartClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <Box
      w={"250px"}
      h={"340px"}
      mb={"40px"}
      py={"8px"}
      px={"12px"}
      _hover={{
        boxShadow: "1px 2px 35px 0px rgba(17, 17, 26, 0.18)",
        cursor: "pointer",
        transition: "0.3s ease-in-out",
      }}
      borderRadius={"4px"}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      position={"relative"}
      onClick={() => handleProductClick(productID)}
      bg={"#fff"}
    >
      <Box w={"100%"}>
        <Flex h={"230px"} w={"225px"} position={"relative"}>
          <Image
            src={productImage}
            alt={productTitle}
            width={"225px"}
            height={"230px"}
          />
          {isHovered && (
            <>
              <Box
                position={"absolute"}
                top={0}
                left={0}
                width={"100%"}
                height={"100%"}
                bg={"rgba(256, 256, 256, 0.7)"}
                zIndex={1}
                transition={"opacity 0.3s ease-in-out"}
                opacity={isHovered ? 1 : 0}
              />
              <Flex
                position={"absolute"}
                bottom={"10px"}
                width={"100%"}
                justifyContent={"space-between"}
                px={"10px"}
                zIndex={2}
                transition={"bottom 0.3s ease-in-out"}
              >
                <Button
                  as={FaShoppingCart}
                  color={"white"}
                  w={"45px"}
                  h={"45px"}
                  bg={"#054A91"}
                  borderRadius={"50%"}
                  _hover={{
                    bg: "#b27e27",
                  }}
                  onClick={(event) =>
                    handleAddToCart(
                      { id: productID, price: productPrice },
                      event
                    )
                  }
                />
                <Button
                  as={FaHeart}
                  color={isHeartClicked ? "red" : "white"}
                  w={"45px"}
                  h={"45px"}
                  bg={isHeartClicked ? "#C3CFDC" : "#054A91"}
                  borderRadius={"50%"}
                  _hover={{
                    bg: "#4D6F98",
                  }}
                  onClick={handleHeartClick}
                />
              </Flex>
            </>
          )}
        </Flex>
        <Flex
          color={"#000000"}
          fontSize={"14px"}
          flexDirection={"column"}
          mt={"25px"}
        >
          <Text noOfLines={1} lineHeight={"22px"}>
            <strong>{productTitle}</strong>
          </Text>
          <Text fontSize={"12px"} color={"#75757A"} fontWeight={600}>
            {Retailer}
          </Text>
        </Flex>
        <Flex
          fontSize={"14px"}
          w={"100%"}
          fontWeight={500}
          color={"#000000"}
          mt={"5px"}
          align={"start"}
        >
          ₦{productPrice.toLocaleString()}
        </Flex>
      </Box>
    </Box>
  );
};

export default CatalogueProduct;
