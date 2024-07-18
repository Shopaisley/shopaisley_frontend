/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import ProductBanner from "../../components/ProductBanner";
import "@fontsource/public-sans";
import "@fontsource/poppins";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import React, { Suspense } from "react";
import { Spinner } from "@chakra-ui/react";
// import axios from "axios";
import { proServer } from "../../services/server";
import clothing from "../../assets/images/fashion/clothing.jpg";
import groceries from "../../assets/images/food/groceries.jpg";
import foods from "../../assets/images/food/foods.jpg";
import electronics from "../../assets/images/electronics/electronics.jpg";
import { useLocation, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store/slices/appSlice";
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";
import CategoryTab from "../../components/CategoryTab";
import axios from "axios";
import { isAuthenticated } from "../../services/authService";
import { toast } from "react-toastify";

const CatalogueProduct = React.lazy(
  () => import("../../components/CatalogueProduct")
);

// interface Product {
//   id: string;
//   ImageURL: string;
//   name: string;
//   retailer: string;
//   unitPrice: number;
// }

const Categories = [
  {
    id: 0,
    catName: "Clothing",
    catDes: "Clothing",
    catImage: clothing,
    catSubText: "Discover a wide range of clothing options for every occasion.",
  },
  {
    id: 1,
    catName: "Groceries",
    catDes: "Groceries",
    catImage: groceries,
    catSubText: "Quality groceries delivered right to your doorstep.",
  },
  {
    id: 2,
    catName: "Electronics",
    catDes: "Electronics",
    catImage: electronics,
    catSubText: "Shop for your quality and affordable electronics",
  },
  {
    id: 3,
    catName: "Foods",
    catDes: "Foods and Drinks",
    catImage: foods,
    catSubText: "Indulge in a variety of delicious foods and refreshing drinks",
  },
];

const ProductCatalogue = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [showMoreProducts, setShowMoreProducts] = useState(false);
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [loadedProducts, setLoadedProducts] = useState<Product[]>([]);
  const { categoryName } = useParams();
  const location = useLocation();

  const handleLoadMoreProducts = () => {
    setShowMoreProducts(true);
  };

  const {
    data: products,
    isLoading,
    // error,
  } = useGetProductQuery();

  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get(`${proServer}/product`);
    //     setProducts(response.data);
    // } catch (err) {
    //     setError(err.message);
    // }finally{
    //   setLoading(false);
    // };
    // fetchProducts();
    // console.log(products)
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // const merchantIds = products?.data.map((product: any) => product.merchantId) || [];
  // const uniqueMerchants = Array.from(new Set(merchantIds));
  // console.log(merchantIds)

  return (
    <Box bg={"#E2E8F0"} fontFamily={"Public Sans"}>
      <Box position="sticky" zIndex={100} top={0}>
        <Navbar />
        <CategoryTab />
      </Box>
      <Box mb={"45px"}>
        {Categories.map((category) => {
          if (categoryName === category.catName.toLowerCase()) {
            return (
              <ProductBanner
                key={category.id}
                categoryName={category.catDes}
                categoryText={category.catSubText}
                bgImage={category.catImage}
              />
            );
          }
          return null;
        })}
      </Box>
      <Flex flexDir={"row"} justify={"space-between"} px={"5vw"} pb={"40px"}>
        {/* <Box>
          <Filter />
        </Box> */}
        <Flex flexDir={"column"} align={"center"}>
          <Flex></Flex>
          <Suspense
            fallback={
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            }
          >
            <Box
              // bg={"#ffffff"}
              w={"90vw"}
              px={"25px"}
              py={"30px"}
              mb={"50px"}
            >
              {isLoading && <Loader />}
              {console.log(products)}
              {products && (
                <Grid
                  w={"100%"}
                  templateColumns="repeat(4, 1fr)"
                  gap={"0px 30px"}
                >
                  {products?.data.map((product: any) => {
                    const productCategoryLower = product.category.toLowerCase();
                    // console.log(product.category)
                    if (activeLink === "/product-catalogue/") {
                      return (
                        <CatalogueProduct
                          key={product.id}
                          productID={product.id}
                          productImage={product.ImageURL}
                          productTitle={product.name}
                          Retailer={""}
                          productPrice={product.unitPrice}
                          // onClick={handleAddToCart}
                        />
                      );
                    } else if (activeLink !== "/product-catalogue/") {
                      if (productCategoryLower === categoryName) {
                        return (
                          <CatalogueProduct
                            key={product.id}
                            productID={product.id}
                            productImage={product.ImageURL}
                            productTitle={product.name}
                            Retailer={""}
                            productPrice={product.unitPrice.toLocaleString()}
                            // onClick={handleAddToCart}
                          />
                        );
                      }
                    }
                  })}
                </Grid>
              )}
            </Box>
          </Suspense>
          <Box>
            {showMoreProducts && (
              <Button
                border={"1px solid #000000"}
                color={"#000000"}
                onClick={handleLoadMoreProducts}
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
