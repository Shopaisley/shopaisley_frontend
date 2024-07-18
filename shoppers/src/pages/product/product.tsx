import { Box } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import ProductView from "../../components/ViewProduct";
import CategoryTab from "../../components/CategoryTab";
import Navbar from "../../components/Navbar";

const Product = () => {
  return (
    <Box bg={"#E2E8F0"} fontFamily={"Public Sans"}>
      <Box position="sticky" zIndex={100} top={0}>
        <Navbar />
        <CategoryTab />
      </Box>
      <Box w={"100%"} px={"10vw"} mb={"50px"}>
        <ProductView />
      </Box>
      <Footer />
    </Box>
  );
};

export default Product;
