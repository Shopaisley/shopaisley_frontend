import { Box } from "@chakra-ui/react";
import ProductPage from "@/components/ViewPage";

const Page = () => {
  return (
    <Box>
      <ProductPage productName="Iphone 15" productCompany="Apple" productDesc="Apple Iphone 15" productPrice="$1000"/>
      {/* <Header/> */}
      {/* <Footer /> */}
      {/* <ProductBox productName={"Iphone 15"} productPrice={"1500"} ProductMaker={"Apple"} /> */}
      {/* <CategoryBox categoryName={"Nike"} categoryImage={acImage} /> */}
      {/* <ProductBanner categoryName={"Apple"} categoryText={"Apple Iphone 15"} /> */}
    </Box>
  );
};

export default Page;

