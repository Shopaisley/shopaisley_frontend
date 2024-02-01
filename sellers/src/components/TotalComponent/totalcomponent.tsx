import type { NextPage } from "next";

import { Box, ChakraProvider, Flex, Img } from "@chakra-ui/react";
import phone from "@/assets/images/electronics/iphone15.png";

import more from "../../assets/images/more.png";
import up from "../../assets/images/up.png";
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
    <Flex >
      <Flex
        borderRadius={"15px"}
        backgroundColor={"white"}
        width={"316.69px"}
        height={"161.17px"}
      >
        <Flex
          borderRadius={"15px"}
          backgroundColor={"#d0fcf4"}
          width={"77.286px"}
          height={"28.276px"}
          pos={"relative"}
          top={"17px"}
        >
          <Flex pos={"relative"} right={"-30px"}>
            <Flex
              width={"14px"}
              height={"12px"}
              pos={"relative"}
              top={"8px"}
              right={"20px"}
            >
              <Img src={up} alt="up"></Img>
            </Flex>

            <Flex pos={"relative"} top={"-19px"} left={"-15px"}>
              <p style={{ fontSize: "20px"}}> {percentage}%</p>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          width={"8.797px"}
          height={"18.85px"}
          pos={"relative"}
          top={"19px"}
          right={"-199px"}
        >
          <Img src={more} alt="more"></Img>
        </Flex>

        <Flex
          color={"#7A7A7A"}
          height={'10px'}
          
          letter-spacing={"-0.194px"}
          pos={"relative"}
          top={"37px"}
          left={"-78px"}
        >
          <p style={{ fontSize: "smaller" }}> Total {name}</p>
        </Flex>

        <Flex
          color={"black"}
          line-height={"13.195px"}
          letter-spacing={"-0.194px"}
          pos={"relative"}
          top={"35px"}
          left={"-147px"}
        >
          <p style={{ fontSize: "35px", fontWeight: "bold" }}> {number}</p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Totalcomponent;