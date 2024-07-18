/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, VStack, Text, Image, Grid, Link } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import CategoryTab from "../../components/CategoryTab";
import { Suspense, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import girl from "../../assets/images/girl 1.svg";
import pattern from "../../assets/images/pattern1.png";
import pattern2 from "../../assets/images/pattern2.png";
import middleman from "../../assets/images/stores/middleman.png";
import perscent from "../../assets/images/stores/100perscent.png";
import tekk from "../../assets/images/stores/tekk.png";
import printing from "../../assets/images/stores/printing-press.png";
import luri from "../../assets/images/stores/luri.png";
import StoreCard from "../../components/StoreCard";
import Footer from "../../components/Footer";
import { useGetProductQuery } from "../../store/slices/appSlice";
import FeaturedProducts from "../../components/FeaturedProducts";
import groceries from "../../assets/images/groceries.svg";
import cloth from "../../assets/images/cloth.svg";
import gadgets from "../../assets/images/gadgets.svg";
import { useNavigate } from "react-router-dom";

const Stores = [
  {
    id: 0,
    name: "Middle man",
    image: middleman,
  },
  {
    id: 1,
    name: "100 Perscent",
    image: perscent,
  },
  {
    id: 2,
    name: "Tekk",
    image: tekk,
  },
  {
    id: 3,
    name: "Printing Press",
    image: printing,
  },
  // {
  //   id: 4,
  //   name: "Cake O'clock",
  //   image: cake,
  // },
  {
    id: 4,
    name: "Luri",
    image: luri,
  },
];

const Home = () => {
  const {
    data: products,
    // isLoading,
    // error,
  } = useGetProductQuery();
  const navigate = useNavigate();
  const [randomProducts, setRandomProducts] = useState<any[]>([]);

  useEffect(() => {
    if (products?.data) {
      const shuffledProducts = [...products.data].sort(() => 0.5 - Math.random());
      const selectedProducts = shuffledProducts.slice(0, 8);
      setRandomProducts(selectedProducts);
    }
  }, [products]);

  return (
    <VStack spacing={10} align="stretch">
      <Box position={"sticky"} zIndex={100} top={0}>
        <Navbar />
        <CategoryTab />
      </Box>
      <Flex
        // align={"center"}
        px={"8vw"}
        mt={"34px"}
      >
        <Box fontFamily={"'Value Sans Pro','Public Sans'"} color={"#000000"}>
          <Text
            fontWeight={700}
            lineHeight={"normal"}
            fontSize={"64px"}
            mt={"135px"}
            ml={"40px"}
          >
            Student Businesses at your finger tips
          </Text>
          <Text ml={"40px"} fontSize={"24px"} mt={"12px"}>
            Never miss a deal 'cause you missed a mail
          </Text>
        </Box>

        <Suspense fallback={<Loader />}>
          <Image src={girl} alt="shopping girl" loading="lazy" />
        </Suspense>
      </Flex>
      <Flex px={"4vw"} w={"100%"} flexDirection={"column"} gap={"30px"}>
        <Box
          textAlign={"center"}
          fontSize={"20px"}
          fontWeight={700}
          color={"#FFFFFF"}
          fontFamily={"Mulish"}
          py={"8px"}
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundRepeat: "repeat",
            backgroundColor: "#124076",
          }}
        >
          Approved Businesses
        </Box>
        <Flex justify={"center"}>
          <Grid templateColumns="repeat(5, 1fr)" gap={16}>
            {Stores.map((store) => (
              <StoreCard
                key={store.id}
                StoreName={store.name.toLocaleUpperCase()}
                StoreImage={store.image}
              />
            ))}
          </Grid>
        </Flex>
        <Flex
          px={"3vw"}
          flexDir={"row"}
          justifyContent={"space-between"}
          textAlign={"center"}
          fontSize={"20px"}
          fontWeight={700}
          color={"#FFFFFF"}
          fontFamily={"Mulish"}
          py={"8px"}
          style={{
            backgroundImage: `url(${pattern2})`,
            backgroundRepeat: "repeat",
            backgroundColor: "#889FBA",
            width: "100%",
          }}
        >
          <Text>Featured Products</Text>
          <Link
            href="/#"
            color={"#fff"}
            fontSize={"16px"}
            fontWeight={600}
            _hover={{ textDecoration: "none" }}
            textDecoration={"underline"}
            alignContent={"center"}
          >
            See all
          </Link>
        </Flex>
        <Flex justify={"center"}>
          <Grid templateColumns="repeat(4, 1fr)" gap={10}>
            {/* {console.log(products)} */}
            {randomProducts.map((product: any) => (
              <FeaturedProducts
                key={product.id}
                image={product.ImageURL}
                productName={product.name}
                productPrice={product.unitPrice}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} mt={"47px"} bg={"#C3CFDC"}>
        <Text
          alignItems={"center"}
          justifyItems={"center"}
          fontFamily={"Mulish"}
          fontSize={"32px"}
          fontWeight={"600"}
          lineHeight={"normal"}
          letterSpacing={"-0.617px"}
          color={"#04101D"}
          py={"8px"}
        >
          What aisle are you visiting first?
        </Text>
      </Flex>
      <Flex
        justifyContent={"space-around"}
        textAlign={"center"}
        fontFamily={"Mulish"}
        fontSize={"22px"}
        fontWeight={600}
      >
        <Box alignContent={"center"}>
          <Link href="/product-catalogue/clothing">
            <Image
              w={"260px"}
              h={"250px"}
              src={cloth}
              alt="cloth"
              mt={"27px"}
              _hover={{
                transform: "scale(1.08)",
                transition: "transform 0.5s",
              }}
            />
          </Link>
          <Text mt={"10px"}>Fashion</Text>
        </Box>
        <Box alignContent={"center"}>
          <Link href="/product-catalogue/groceries">
            <Image
              w={"260px"}
              h={"250px"}
              src={groceries}
              alt="groceries"
              _hover={{
                transform: "scale(1.08)",
                transition: "transform 0.5s",
              }}
            />
          </Link>
          <Text mt={"10px"}>Groceries</Text>
        </Box>

        <Box alignContent={"center"}>
          <Link href="/product-catalogue/electronics">
            <Image
              w={"260px"}
              h={"250px"}
              src={gadgets}
              alt="gadgets"
              _hover={{
                transform: "scale(1.08)",
                transition: "transform 0.5s",
              }}
            />
          </Link>
          <Text mt={"10px"}>Gadgets</Text>
        </Box>
      </Flex>
      <Footer />
    </VStack>
  );
};

export default Home;
