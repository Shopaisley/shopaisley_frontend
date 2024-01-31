import React from "react";
import { Box, Button, Flex, Icon, Image, Text, Link } from "@chakra-ui/react";
// import Link from "next/link";
import Logo from "../../assets/icons/fi-rr-arrow-down-to-square.svg";
import "@fontsource/public-sans";
import "@fontsource/poppins";

const menus = [
  {
    title: "Dashboard",
    link: "/",
    icon: Logo,
  },
  {
    title: "Products",
    link: "/",
    icon: Logo,
  },
  {
    title: "Orders",
    link: "/",
    icon: Logo,
  },
  {
    title: "Notifications",
    link: "/",
    icon: Logo,
  },
  {
    title: "Settings",
    link: "/",
    icon: Logo,
  },
];

function SideMenu() {
  return (
    <Box p="1rem">
      <Flex
        h="full"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={4}
      >
        <Box>
          <Link href="/">
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={"0.5rem"}
              flexDirection={"column"}
            >
              <Text fontFamily={"Poppins"} fontWeight={600} fontSize={"20px"} color={'white'}>
                Shopaisley
              </Text>
            </Flex>
          </Link>
        </Box>
        <Flex
          direction={"column"}
          mt="32px"
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
        >
          {menus.map(({ title, link, icon }, index) => (
            <Link
              key={index}
              href={`${link}`}
              style={{ textDecoration: "unset" }}
            >
              <Box
                boxShadow="rgba(0, 0, 0, 0.08) 0px 1px 4px"
                fontFamily={"Public Sans"}
                fontWeight={490}
                fontSize={"17px"}
                borderColor={"grey"}
                py={"1.5rem"}
                bg="black"
                w={"12rem"}
                mb="20px"
                // bgGradient={"linear(to-r, #6837f0, #9d4edd)  !important"}
                as={Button}
                justifyContent={"flex-start"}
                _hover={{
                  background: "#3E7CB1",
                  color: "white",
                }}
                color="white"
              >
                <Text>{title}</Text>
              </Box>
            </Link>
          ))}
        </Flex>

        <Box
          borderBottom="2px"
          borderColor="gray.300"
          width="90%"
          my="4" // margin on the y-axis (top and bottom)
        />

        {/* <Flex direction={"column"} mt="32px">
          {userMenus.map(({ title, link, icon }, index) => (
            <Link
              key={index}
              href={`${link}`}
              style={{ textDecoration: "unset" }}
            >
              <Box
                boxShadow="rgba(0, 0, 0, 0.08) 0px 1px 4px"
                fontFamily={"Public Sans"}
                fontWeight={490}
                fontSize={"17px"}
                borderColor={"brand.secondary"}
                py={"1.5rem"}
                // bg="white"
                w={"12rem"}
                mb="20px"
                // bgGradient={"linear(to-r, #6837f0, #9d4edd)  !important"}
                as={Button}
                justifyContent={"flex-start"}
                _hover={{
                  background: "#3E7CB1",
                  color: "white",
                }}
                color="brand.secondary"
              >
                <Text>{title}</Text>
              </Box>
            </Link>
          ))}
        </Flex> */}
      </Flex>
    </Box>
  );
}

export default SideMenu;
