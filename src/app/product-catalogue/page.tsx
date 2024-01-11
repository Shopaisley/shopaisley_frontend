import { Box } from "@chakra-ui/react";
import CategoryBox from "@/components/CategoryBox";
import acImage from "@/assets/images/electronics/air-conditioner.jpeg";

const Page = () => {
  return (
    <Box>
      <CategoryBox categoryName={"Nike"} categoryImage={acImage} />
    </Box>
  );
};

export default Page;

// import CategoryBox from "@/components/CategoryBox"
// import { Box } from "@chakra-ui/react"
// import acImage from "../../../public/assets/images/electronics/air-conditioner.jpeg";
// // import ac from "../../../public/next.svg";

// const Page = () => {
//     return (
//         <Box>
//             <CategoryBox categoryName={"Nike"} categoryImage={"/air-conditioner.jpeg"}/>
//         </Box>
//     )
// }

// export default Page

