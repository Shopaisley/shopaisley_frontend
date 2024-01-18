"use client"
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import coffee from "@/assets/images/electronics/coffee-maker.png";
import Header from "@/components/Header";
import ProductBanner from "@/components/ProductBanner";
import CatalogueProduct from "@/components/CatalogueProduct";
import Filter from "@/components/Filter";
import "@fontsource/public-sans"
import "@fontsource/poppins"
import Footer from "@/components/Footer";
import AdvertHeader from "@/components/AdvertHeader";

const Page = () => {
  return (
    <Box
      bg={"#E2E8F0"}
      fontFamily={"Public Sans"}
    >
      <AdvertHeader />
      <Header />
      <Box
        mb={"45px"}
      >
        <ProductBanner categoryName="Electronics" categoryText="Shop for your quality and affordable electronics." />
      </Box>
      <Flex
        flexDir={"row"}
        justify={"space-between"}
        px={"5vw"}
      >
        <Box>
          <Filter />
        </Box>
        <Flex
          flexDir={"column"}
          justify={"center"}
        >
          <Flex>

          </Flex>
          <Box
            bg={"#ffffff"}
            w={"1020px"}
            px={"25px"}
            py={"30px"}
            mb={"50px"}
          >
            <Grid w={"100%"} templateColumns="repeat(4, 1fr)" gap={"20px"}>
              <CatalogueProduct productImage={coffee} productTitle="Haier Thermacool" Retailer="Haier" productPrice="₦650,000" />
              <CatalogueProduct productImage={coffee} productTitle="Haier Thermacool" Retailer="Haier" productPrice="₦650,000" />
              <CatalogueProduct productImage={coffee} productTitle="Haier Thermacool" Retailer="Haier" productPrice="₦650,000" />
              <CatalogueProduct productImage={coffee} productTitle="Haier Thermacool" Retailer="Haier" productPrice="₦650,000" />
              <CatalogueProduct productImage={coffee} productTitle="Haier Thermacool" Retailer="Haier" productPrice="₦650,000" />
              <CatalogueProduct productImage={coffee} productTitle="Haier Thermacool" Retailer="Haier" productPrice="₦650,000" />
              <CatalogueProduct productImage={coffee} productTitle="Haier Thermacool" Retailer="Haier" productPrice="₦650,000" />
              <CatalogueProduct productImage={coffee} productTitle="Haier Thermacool" Retailer="Haier" productPrice="₦650,000" />
            </Grid>
          </Box>
          <Box>

          </Box>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Page;

