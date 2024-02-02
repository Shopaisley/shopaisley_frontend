import React from "react";
import { Box, Button, Flex, Icon, Image, Text, Link } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import dashboard from "../../assets/icons/icons8-dashboard-32.png";
import products from "../../assets/icons/icons8-box-24.png";
import orders from "../../assets/icons/icons8-order-50.png";
import notif from "../../assets/icons/icons8-notification-50.png";
import settings from "../../assets/icons/icons8-settings-64.png";

import "@fontsource/public-sans";
import "@fontsource/poppins";

const menus = [
  {
    title: "Dashboard",
    link: "/",
    icon: dashboard,
  },
  {
    title: "Products",
    link: "/products",
    icon: products,
  },
  {
    title: "Orders",
    link: "/orders",
    icon: orders,
  },
  {
    title: "Notifications",
    link: "/notifications",
    icon: notif,
  },
  {
    title: "Settings",
    link: "/settings",
    icon: settings,
  },
];

function SideMenu() {
  const location = useLocation();

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
              <Text
                fontFamily={"Poppins"}
                fontWeight={"1000rem"}
                fontSize={"28px"}
                color={"white"}
              >
                Shop<span style={{ color: "#054A91" }}>aisley</span>
              </Text>
            </Flex>
          </Link>
        </Box>
        <Flex
          direction={"column"}
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
                fontWeight={400}
                fontSize={"14px"}
                bg={location.pathname === link ? "#3E7CB1" : "black"}
                w={"10rem"}
                mb="12px"
                as={Button}
                px={"1px"}
                py={"2p"}
                size={"sm"}
                justifyContent={"flex-start"}
                _hover={{
                  background: "#3E7CB1",
                  color: "white",
                }}
                color={location.pathname === link ? "white" : "white"}
              >
                <Image src={icon} alt="user" width={18} ml={22} mr={12} />
                <Text>{title}</Text>
              </Box>
            </Link>
          ))}
        </Flex>

        <Box borderBottom="2px" borderColor="gray.300" />
        <Link
          mt={"80px"}
          color={"white"}
          href="http://localhost:5173/"
          _hover={{
            borderBottom: "3px solid #054A91",
            color: "#054A91",
            transition: "0.2s ease-in",
          }}
        >
          Back to Shopping
        </Link>
      </Flex>
    </Box>
  );
}

export default SideMenu;
