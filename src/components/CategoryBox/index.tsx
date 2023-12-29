import { Box } from "@chakra-ui/react";
import { FC } from "react";

interface CategoryBoxProps {
    categoryName: string;
    categoryImage: string;
}

const CategoryBox: FC<CategoryBoxProps> = (
    {
        categoryName,
        categoryImage
    }
    ) => {
    return (
        <Box
            w={"150px"}
            h={"150px"}
            bg={"#fff"}
            color={"#000000"}
            borderRadius={"10px"}
            bgImage={categoryImage}
        >
            {categoryName}
        </Box>
    )
}

export default CategoryBox