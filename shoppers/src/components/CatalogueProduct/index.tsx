/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { server } from "../../server";

interface CatalogueProductProps {
  productID: string;
  productImage: any;
  productTitle: string;
  Retailer: string;
  productPrice: number;
  onClick?: any;
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

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleProductClick = (productId: string) => {
    // Use the product title and id to create the path
    // const path = `/product/${productTitle.replace(/\s+/g, '-').toLowerCase()}-${productID}`;
    const path = `/product/${productId}`;

    // Navigate to the product view page
    navigate(path);
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
  
  return (
    <Box
      w={"208px"}
      h={"340px"}
      mb={"40px"}
      py={"8px"}
      px={"4px"}
      _hover={{
        boxShadow: "1px 2px 35px 0px rgba(17, 17, 26, 0.18)",
        cursor: "pointer",
        transition: "0.3s ease-in-out"
      }}
      borderRadius={"4px"}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Box
        onClick={() => handleProductClick(productID)}
        w={"100%"}
      >
        <Flex h={"208px"} w={"208px"}>
          <Image src={productImage} alt={productTitle} width={"202px"} height={"208px"} />
        </Flex>
        <Flex
          color={"#000000"}
          fontSize={"14px"}
          flexDirection={"column"}
          // align={"center"}
          // w={"100%"}
          mt={"8px"}
        >
          <Text noOfLines={1} lineHeight={"22px"}>
            <strong>{productTitle}</strong>
          </Text>
          <Text
            fontSize={"12px"}
            color={"#75757A"}
            fontWeight={600}
          >
            {Retailer}
          </Text>
        </Flex>
        <Flex fontSize={"14px"} w={"100%"} fontWeight={500} color={"#000000"} mt={"5px"} align={"start"}>
          ₦{productPrice}
        </Flex>
      </Box>
      {isHovered && (
        <Box
          as={Button}
          w={"100%"}
          justifySelf={"center"}
          bg={"#054A91"}
          borderRadius={"3px"}
          fontSize={"13px"}
          fontWeight={500}
          transition={"1s ease-in-out"}
          color={"white"}
          my={"5px"}
          _hover={{
            backgroundColor: "white",
            color: "white",
            cursor: "pointer",
            bgColor: "#3E7CB1",
            transition: "0.3s ease-in-out",
          }}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </Box>
      )}
    </Box>
    // </Link>
  );
};

export default CatalogueProduct;