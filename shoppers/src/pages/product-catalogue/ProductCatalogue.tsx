"use client"
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import Header from "../../components/Header";
import ProductBanner from "../../components/ProductBanner";
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
import clothing from "../../assets/images/fashion/clothing.jpg";
import groceries from "../../assets/images/food/groceries.jpg";
import electronics from "../../assets/images/electronics/electronics.jpg";
import { useParams } from "react-router-dom";
const CatalogueProduct = React.lazy(() => import('../../components/CatalogueProduct'));

interface Product {
  id: string;
  ImageURL: string;
  name: string;
  retailer: string;
  unitPrice: number;
}

const Categories = [
  {
    id: 0,
    catName: "Clothing",
    catImage: clothing,
    catSubText: "Discover a wide range of clothing options for every occasion."
  },
  {
    id: 1,
    catName: "Groceries",
    catImage: groceries,
    catSubText: "Quality groceries delivered right to your doorstep."
  },
  {
    id: 2,
    catName: "Electronics",
    catImage: electronics,
    catSubText: "Shop for your quality and affordable electronics"
  }
]

const ProductCatalogue = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showMoreProducts, setShowMoreProducts] = useState(false);
  const [loadedProducts, setLoadedProducts] = useState<Product[]>([]);
  const { categoryName } = useParams();

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

  const loadMoreProducts = () => {
    const newProducts = products.filter(
      (product) => !loadedProducts.some((loadedProduct) => loadedProduct.id === product.id)
    );

    // Filter out the products that are already loaded
    const filteredNewProducts = newProducts.filter(
      (newProduct) => !loadedProducts.some((loadedProduct) => loadedProduct.id === newProduct.id)
    );

    setLoadedProducts((prevLoadedProducts) => [...prevLoadedProducts, ...filteredNewProducts]);
  };
  
  return (
    <Box
      bg={"#E2E8F0"}
      fontFamily={"Public Sans"}
    >
      <AdvertHeader />
      <Header />
      <Box mb={"45px"}>
        {Categories.map((category) => {
          if (category.catName === categoryName) {
            return (
              <ProductBanner
                key={category.id}
                categoryName={category.catName}
                categoryText={category.catSubText}
                bgImage={category.catImage}
              />
            );
          }
          return null;
        })}
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
              <Grid w={"100%"} templateColumns="repeat(4, 1fr)" gap={"0px 30px"}>
                {products && (products.map((product) => (
                  <CatalogueProduct
                    key={product.id}
                    productID={product.id}
                    productImage={product.ImageURL}
                    productTitle={product.name}
                    // Retailer={product.retailer}
                    Retailer={"Apple"}
                    productPrice={product.unitPrice}
                  />
                )))}
                {showMoreProducts &&
                products &&
                products.map((product) => (
                  !loadedProducts.some((loadedProduct) => loadedProduct.id === product.id) && (
                    <CatalogueProduct
                      key={product.id}
                      productID={product.id}
                      productImage={product.ImageURL}
                      productTitle={product.name}
                      Retailer={product.retailer}
                      productPrice={product.unitPrice}
                    />
                  )
                ))}
              </Grid>
            </Box>
          </Suspense>
          <Box>
          {!showMoreProducts && (
            <Button
              border={"1px solid #000000"}
              color={"#000000"}
              onClick={handleLoadMoreProducts}
              borderRadius={"2px"}
            >
              Load More Products
            </Button>
          )}
          {showMoreProducts && (
            <Button
              border={"1px solid #000000"}
              color={"#000000"}
              onClick={loadMoreProducts}
              borderRadius={"2px"}
            >
              Load More Products
            </Button>
          )}
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default ProductCatalogue;