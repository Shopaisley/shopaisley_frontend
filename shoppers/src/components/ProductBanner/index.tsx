import {
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";
import electronics from "@/assets/images/electronics/electronics.jpg";

interface CategoryBannerProps {
  categoryName: string;
  categoryText: string;
}

const CategoryBanner: FC<CategoryBannerProps> = (
  {
    categoryName,
    categoryText
  }
) => {
  return (
    <Flex
      flexDir={"column"}
      w={"full"}
      h={"200px"}
      justifyItems={"center"}
      flex="1"
    >
      <div
        style={{
          backgroundImage: `url(${electronics.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <Text fontSize={"2rem"} color={"white"} mt={"2rem"} ml={"2rem"}>
          {categoryName}
        </Text>
        <Text color={"white"} mt={"1rem"} ml={"2rem"}>
          {categoryText}
        </Text>
      </div>
    </Flex>
  );
}

export default CategoryBanner;