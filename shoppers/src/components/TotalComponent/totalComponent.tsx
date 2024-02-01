import type { NextPage } from "next";

import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import phone from "@/assets/images/electronics/iphone15.png";
import Image from "next/image";
import more from "@/assets/images/more/more.png";
import up from "@/assets/images/up/up.png";
import { FC } from "react";

interface TotalComponentProps {
  name: any;
  number: string;
  percentage: string;
}

const Totalcomponent: FC<TotalComponentProps> = ({
  name,
  number,
  percentage,
}) => {
  return (
    <Box >
      <Box
        borderRadius={"15px"}
        backgroundColor={"white"}
        width={"316.69px"}
        height={"161.17px"}
      >
        <Box
          borderRadius={"15px"}
          backgroundColor={"#d0fcf4"}
          width={"77.286px"}
          height={"28.276px"}
          pos={"relative"}
          top={"17px"}
        >
          <Box pos={"relative"} right={"-30px"}>
            <Box
              width={"14px"}
              height={"12px"}
              pos={"relative"}
              top={"8px"}
              right={"20px"}
            >
              <Image src={up} alt="up"></Image>
            </Box>

            <Box pos={"relative"} top={"-11px"}>
              <p style={{ fontSize: "20px"}}> {percentage}%</p>
            </Box>
          </Box>
        </Box>

        <Box
          width={"8.797px"}
          height={"18.85px"}
          pos={"relative"}
          top={"-8px"}
          right={"-285px"}
        >
          <Image src={more} alt="more"></Image>
        </Box>

        <Box
          color={"#7A7A7A"}
          line-height={"13.195px"}
          letter-spacing={"-0.194px"}
          pos={"relative"}
          top={"5px"}
          left={"5px"}
        >
          <p style={{ fontSize: "smaller" }}> Total {name}</p>
        </Box>

        <Box
          color={"black"}
          line-height={"13.195px"}
          letter-spacing={"-0.194px"}
          pos={"relative"}
          top={"18px"}
          left={"5px"}
        >
          <p style={{ fontSize: "35px", fontWeight: "bold" }}> {number}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Totalcomponent;
