/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  Input,
  InputGroup,
  Button,
  Image,
  Icon,
  InputLeftElement,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import logo from "../../assets/images/campuscart-logo-noname.svg";
import "@fontsource/public-sans";
import "@fontsource/poppins";
// import { useEffect, useState, useHistory } from "react-router-dom";
// import { JwtPayload, decode } from 'jsonwebtoken';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { server } from "../../services/server";
import axios from "axios";
import profile from "../../assets/icons/my-account.svg";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";


const SERVER_IP = "localhost";
// import.meta.env.VITE_SERVER_IP
const SERVER_PORT = "5173";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const [cartNo, setCartNo] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const getLoggedInUser = () => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      try {
        const tokenParts = authToken.split(".");
        const payload = JSON.parse(atob(tokenParts[1]));
        console.log(payload);

        if (payload) {
          // Assuming the token contains a field like 'username'
          const username = payload.user_id;
          return username;
        }
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    }

    return null;
  };

  useEffect(() => {
    // Set active link based on the current location
    const orderId = localStorage.getItem("order_id");
    try {
      const res = axios.get(`${server}/order/${orderId}`);
      res.then((response) => {
        console.log(response.data.data.order_items.length);
        setCartNo(response.data.data.order_items.length);
        // setCartNo(response.data.order_items.length())
      });
    } catch (err) {
      console.log(err);
    }
    setActiveLink(location.pathname);

    // Check if the user is logged in and set the username
    const user = getLoggedInUser(); // You should implement this function
    setLoggedInUser(user);
  }, [location.pathname]);

  const handleSearch = () => {
    // Redirect to search page with query parameter
    if (searchTerm.trim() !== "") {
      navigate(`/search/?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <Box
      fontFamily={"'Value Sans Pro' ,'Public Sans'"}
      borderBottom={"1px solid #909090"}
      // position="sticky"
      // top={0}
      zIndex={10}
      boxShadow={"rgba(0, 0, 0, 0.2) 0px 4px 8px 0px"}
    >
      <Flex
        as={"nav"}
        align="center"
        justifyContent={"space-between"}
        bg={"#FFFFFF"}
        px={"2rem"}
        py={"1.3rem"}
        width="100%"
        position="sticky"
        top={0}
        zIndex={100}
      >
        {/* <Flex align="center" alignContent={'space-around'} > */}
        <ChakraLink _hover={{ textDecoration: "none" }} mr={"2.4rem"} href="/">
          <Flex
            // my={"30px"}
            flexDirection={"row"}
            // justifyItems={"center"}
            mr={"2.5vw"}
            align={"center"}
          >
            <Image
              src={logo}
              alt="campuscart-logo"
              width={"40px"}
              height={"40px"}
              mr={"8px"}
            />
            <Text
              color={"#124076"}
              fontFamily={"Value Sans Pro"}
              fontWeight={500}
              fontSize={"20px"}
            >
              {/* Campus<span style={{ color: "#054A91" }}>Cart</span> */}
              CampusCart
            </Text>
          </Flex>
        </ChakraLink>
        <ChakraLink
    href={`http://${SERVER_IP}:${SERVER_PORT}/`}
    color={"#BC7E27"}
    fontSize={"14px"}
    fontWeight={500}
    _hover={{
      color: "#3E2A0D",
      transition: "0.2s ease-in",
    }}
  >
    Sell on CampusCart
  </ChakraLink>
        <Flex flexDirection={"row"} gap={"10px"} align={"center"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon color="#52525C">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="2 2 15 15"
                  fill="none"
                >
                  <path
                    d="M12.5 12.0602C13.5229 11.1447 14.1667 9.81418 14.1667 8.33334C14.1667 5.57192 11.9281 3.33334 9.16669 3.33334C6.40526 3.33334 4.16669 5.57192 4.16669 8.33334C4.16669 11.0948 6.40526 13.3333 9.16669 13.3333C10.4473 13.3333 11.6154 12.8519 12.5 12.0602ZM12.5 12.0602L16.2732 15.8333"
                    stroke="#52525C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Icon>
            </InputLeftElement>
            <Input
              placeholder="Search products, stores and categories"
              _placeholder={{
                color: "black",
                opacity: "0.5",
                fontFamily: "'Mulish'",
              }}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              w={"30rem"}
              borderRadius={"8px"}
              color={"black"}
              fontSize={"12px"}
              fontWeight={400}
            />
          </InputGroup>
          <Button
            h="2rem"
            size="md"
            color={"white"}
            fontSize={"12px"}
            fontWeight={700}
            bg={"#124076"}
            borderColor={"black"}
            borderRadius={"5px"}
            px={"12px"}
            py={"16px"}
            _hover={{
              backgroundColor: "white",
              color: "white",
              cursor: "pointer",
              bgColor: "#889FBA",
            }}
            boxShadow={"rgba(0, 0, 0, 0.2) 0px 4px 8px 0px"}
          >
            SEARCH
          </Button>
        </Flex>
        <Flex flexDirection={"row"} gap={"21px"}>
          <Link to="/profile">
            <Flex
              flexDirection={"row"}
              align={"center"}
              color="#353535"
              gap={"8px"}
            >
              <Icon as={Image} src={profile} w={"15px"} h={"15px"} />
              <Text fontSize={"16px"}>My Account</Text>
            </Flex>
          </Link>
          <Link to="/cart">
            <Flex
              flexDirection={"row"}
              align={"center"}
              color="#353535"
              // gap={"8px"}
            >
              <Flex>
                <IconButton
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4.8 12.8C3.92 12.8 3.208 13.52 3.208 14.4C3.208 15.28 3.92 16 4.8 16C5.68 16 6.4 15.28 6.4 14.4C6.4 13.52 5.68 12.8 4.8 12.8ZM0 0V1.6H1.6L4.48 7.672L3.4 9.632C3.272 9.856 3.2 10.12 3.2 10.4C3.2 11.28 3.92 12 4.8 12H14.4V10.4H5.136C5.024 10.4 4.936 10.312 4.936 10.2L4.96 10.104L5.68 8.8H11.64C12.24 8.8 12.768 8.472 13.04 7.976L15.904 2.784C15.968 2.672 16 2.536 16 2.4C16 1.96 15.64 1.6 15.2 1.6H3.368L2.616 0H0ZM12.8 12.8C11.92 12.8 11.208 13.52 11.208 14.4C11.208 15.28 11.92 16 12.8 16C13.68 16 14.4 15.28 14.4 14.4C14.4 13.52 13.68 12.8 12.8 12.8Z"
                        fill="#353535"
                      />
                    </svg>
                  }
                  aria-label="Cart"
                  // position="relative"
                  background={"transparent"}
                  h={"20px"}
                  _hover={{
                    bg: "transparent",
                  }}
                />
                <Badge
                  position="relative"
                  top="-1"
                  right="3"
                  w={"14px"}
                  h={"14px"}
                  // transform="translate(50%, -50%)"
                  borderRadius="full"
                  bg="#BC7E27B2"
                  color="#000000"
                  fontSize="0.7em"
                  fontWeight={500}
                  display={"flex"}
                  // alignItems={"center"}
                  justifyContent={"center"}
                  alignContent={"center"}
                >
                  {cartNo}
                </Badge>
              </Flex>
              <Text fontSize={"16px"}>Cart</Text>
            </Flex>
          </Link>
          <Link to="#">
            <Flex
              flexDirection={"row"}
              align={"center"}
              color="#353535"
              gap={"8px"}
            >
              <Text fontSize={"16px"}>Help</Text>
              <Icon as={QuestionOutlineIcon} w={"16px"} h={"16px"} />
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
