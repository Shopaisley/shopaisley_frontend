/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

interface CategoryBannerProps {
  categoryName: string;
  categoryText: string;
  bgImage: string;
}

const CategoryBanner: FC<CategoryBannerProps> = ({
  categoryName,
  categoryText,
  bgImage,
}) => {
  return (
    <Flex
      flexDir={"column"}
      w={"full"}
      h={"200px"}
      justifyItems={"center"}
      flex="1"
      fontFamily={"Mulish"}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${bgImage})`,
          backgroundSize: "cover",
          mixBlendMode: "multiply",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <Text
          fontWeight={600}
          fontSize={"2rem"}
          color={"white"}
          mt={"2rem"}
          ml={"2rem"}
        >
          {categoryName}
        </Text>
        <Text color={"white"} mt={"1rem"} ml={"2rem"}>
          {categoryText}
        </Text>
      </div>
    </Flex>
  );
};

export default CategoryBanner;
