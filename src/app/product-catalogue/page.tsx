import { Box } from "@chakra-ui/react";
import CategoryBox from "@/components/CategoryBox";
import acImage from "@/assets/images/electronics/air-conditioner.jpeg";
import ProductBanner from "@/components/ProductBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <Box>
      <Header/>
      <Footer />
      {/* <CategoryBox categoryName={"Nike"} categoryImage={acImage} /> */}
      {/* <ProductBanner categoryName={"Apple"} categoryText={"Apple Iphone 15"} /> */}
    </Box>
  );
};

export default Page;

