import { Box } from "@chakra-ui/react";
import CategoryBox from "@/components/CategoryBox";
import acImage from "@/assets/images/electronics/air-conditioner.jpeg";
import ProductBanner from "@/components/ProductBanner";
import SellerHeader from "@/components/SellerHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardLayout from "@/components/DashboardLayout";

const Page = () => {
  return (
    <Box>
      
      <DashboardLayout />
      <SellerHeader userName="OgeAta"/>
      {/* <Footer /> */}
      {/* <CategoryBox categoryName={"Nike"} categoryImage={acImage} /> */}
      {/* <ProductBanner categoryName={"Apple"} categoryText={"Apple Iphone 15"} /> */}
    </Box>
  );
};

export default Page;

