import { Box } from "@chakra-ui/react";
import { FC } from "react";
import Image from "next/image";

interface CategoryBoxProps {
  categoryName: string;
  categoryImage: any;
}

const CategoryBox: FC<CategoryBoxProps> = ({ categoryName, categoryImage }) => {
  return (
    <Box
      w={"150px"}
      h={"150px"}
      borderRadius={"10px"}
      overflow="hidden"
      position="relative"
    >
      <Image
        src={categoryImage}
        alt={categoryName}
        width= {150}
        height= {150}
        objectFit="cover"
      />
      <Box
        w="100%"
        h="100%"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        color="#FFFFFF"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0"
        left="0"
      >
        {categoryName}
      </Box>
    </Box>
  );
};

export default CategoryBox;


// import { Box } from "@chakra-ui/react";
// import { FC } from "react";

// interface CategoryBoxProps {
//     categoryName: string;
//     categoryImage: any;
// }

// const CategoryBox: FC<CategoryBoxProps> = (
//     {
//         categoryName,
//         categoryImage
//     }
//     ) => {
//     return (
//         <Box
//             w={"150px"}
//             h={"150px"}
//             backgroundImage={`url(${categoryImage})`}
//             color={"#000000"}
//             borderRadius={"10px"}
//             // bgImage={categoryImage}
//             bgSize={"cover"}
//         >
//             {categoryName}
//         </Box>
//     )
// }

// export default CategoryBox
