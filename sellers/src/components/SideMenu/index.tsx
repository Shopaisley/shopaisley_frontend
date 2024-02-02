import React from "react";
import { Box, Button, Flex, Icon, Image, Text, Link} from "@chakra-ui/react";
// import Link from "next/link";
import dashboard from '../../assets/icons/icons8-dashboard-32.png';
import products from '../../assets/icons/icons8-box-24.png';
import orders from '../../assets/icons/icons8-order-50.png';
import notif from '../../assets/icons/icons8-notification-50.png';
import settings from '../../assets/icons/icons8-settings-64.png';

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
    link: "/",
    icon: products,
  },
  {
    title: "Orders",
    link: "/",
    icon: orders,
  },
  {
    title: "Notifications",
    link: "/",
    icon: notif,
  },
  {
    title: "Settings",
    link: "/",
    icon: settings,
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
              <Text fontFamily={"Poppins"} fontWeight={'1000rem'} fontSize={"28px"} color={'white'}>
              Shop<span style={{ color: "#054A91" }}>aisley</span>
              </Text>
            </Flex>
          </Link>
        </Box>
        <Flex
          direction={"column"}
          // mt="32px"
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
                // borderColor={"grey"}
                // py={"-1.5rem"}
                bg="black"
                w={"10rem"}
                mb="12px"
                
                as={Button}
                px={'1px'}
                py={'2p'}
                size={'sm'}
                justifyContent={"flex-start"}
                _hover={{
                  background: "#3E7CB1",
                  color: "white",
                }}
                color="white"
              >
                <Image src={icon } alt='user' width={18} ml={22} mr={12}/>
                <Text>{title}</Text>
              </Box>
            </Link>
          ))}
        </Flex>

        <Box
          borderBottom="2px"
          borderColor="gray.300"
          // width="90%"
          // my="4" // margin on the y-axis (top and bottom)
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
