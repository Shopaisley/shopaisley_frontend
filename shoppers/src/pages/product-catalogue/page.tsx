"use client"
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
// import coffee from "../../assets/images/electronics/coffee-maker.png";
import Header from "../../components/Header";
import ProductBanner from "../../components/ProductBanner";
// import CatalogueProduct from "@/components/CatalogueProduct";
import Filter from "../../components/Filter";
import "@fontsource/public-sans"
import "@fontsource/poppins"
import Footer from "../../components/Footer";
import AdvertHeader from "../../components/AdvertHeader";
import { useEffect, useState } from "react";
import React, { Suspense } from 'react';
import { Spinner } from "@chakra-ui/react";
import axios from "axios";
import { server } from "../../server";
const CatalogueProduct = React.lazy(() => import('../../components/CatalogueProduct'));

interface Product {
  id: string;
  ImageURL: string;
  name: string;
  retailer: string;
  unitPrice: number;
}

const ProductCatalogue = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showMoreProducts, setShowMoreProducts] = useState(false);

  const handleLoadMoreProducts = () => {
    setShowMoreProducts(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${server}/product`);
        console.log(response.data.data)
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
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
        pb={"40px"}
      >
        <Box>
          <Filter />
        </Box>
        <Flex
          flexDir={"column"}
          align={"center"}
        >
          <Flex>

          </Flex>
          <Suspense fallback={<Spinner />}>
            <Box
              bg={"#ffffff"}
              w={"1020px"}
              px={"25px"}
              py={"30px"}
              mb={"50px"}
            >
              <Grid w={"100%"} templateColumns="repeat(4, 1fr)" gap={"20px"}>
                {products && (products.map((product) => (
                  <CatalogueProduct
                    key={product.id}
                    productImage={product.ImageURL}
                    productTitle={product.name}
                    Retailer={product.retailer}
                    productPrice={product.unitPrice}
                  />
                )))}
                {showMoreProducts && (
                  <>
                    {products && (products.map((product) => (
                      <CatalogueProduct
                        key={product.id}
                        productImage={product.ImageURL}
                        productTitle={product.name}
                        Retailer={product.retailer}
                        productPrice={product.unitPrice}
                      />
                    )))}
                  </>
                )}
              </Grid>
            </Box>
          </Suspense>
          <Box>
            <Button
              border={"1px solid #000000"}
              color={"#000000"}
              onClick={handleLoadMoreProducts}
              borderRadius={"2px"}
            >
              Load More Products
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default ProductCatalogue;



