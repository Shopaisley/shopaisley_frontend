import { Box } from "@chakra-ui/react";
import CategoryBox from "@/components/CategoryBox";
import acImage from "@/assets/images/electronics/air-conditioner.jpeg";
import ProductBanner from "@/components/ProductBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductBox from "@/components/SingleProduct";

const Page = () => {
  return (
    <Box>
      <Header/>
      <Footer />
      {/* <ProductBox productName={"Iphone 15"} productPrice={"1500"} ProductMaker={"Apple"} /> */}
      {/* <CategoryBox categoryName={"Nike"} categoryImage={acImage} /> */}
      {/* <ProductBanner categoryName={"Apple"} categoryText={"Apple Iphone 15"} /> */}
    </Box>
  );
};

export default Page;

