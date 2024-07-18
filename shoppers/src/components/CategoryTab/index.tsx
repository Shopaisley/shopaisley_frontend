import { Box, Flex, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const CategoryTab = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const { linkStyle } = useStyles();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, []);

  return (
    <Box
      // position="sticky"
      //   zIndex={1000}
      boxShadow={"rgba(0, 0, 0, 0.25) 0px 2px 4px 0px"}
      fontFamily={"'Value Sans Pro', 'Public Sans'"}
    >
      <Flex
        w={"100%"}
        h={"100%"}
        bgColor={"#124076"}
        justifyContent={"space-between"}
        align={"center"}
        flexDirection={"row"}
        px={"2rem"}
        py={"0.7rem"}
      >
        <Link
          href="/product-catalogue/"
          color={"#fff"}
          fontSize={"16px"}
          fontWeight={500}
          _hover={{ textDecoration: "none" }}
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          gap={"8px"}
          style={
            activeLink === "/product-catalogue/"
              ? linkStyle._activeLink
              : linkStyle
          }
        >
          All Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 11 11"
            fill="none"
          >
            <path
              d="M3.05395 4.65662C2.83202 4.65662 2.66547 4.5582 2.55432 4.36136C2.44354 4.16414 2.44605 3.96942 2.56184 3.7772L4.71842 0.273919C4.83421 0.0913063 4.99825 0 5.21053 0C5.42281 0 5.58684 0.0913063 5.70263 0.273919L7.85921 3.7772C7.975 3.96942 7.97732 4.16414 7.86616 4.36136C7.75539 4.5582 7.58904 4.65662 7.36711 4.65662H3.05395ZM8.39474 11C7.67105 11 7.05582 10.7478 6.54905 10.2434C6.04267 9.73863 5.78947 9.12582 5.78947 8.40498C5.78947 7.68414 6.04267 7.07133 6.54905 6.56655C7.05582 6.06216 7.67105 5.80996 8.39474 5.80996C9.11842 5.80996 9.73365 6.06216 10.2404 6.56655C10.7468 7.07133 11 7.68414 11 8.40498C11 9.12582 10.7468 9.73863 10.2404 10.2434C9.73365 10.7478 9.11842 11 8.39474 11ZM0.578947 10.7117C0.414912 10.7117 0.277509 10.6563 0.166737 10.5456C0.055579 10.4352 0 10.2984 0 10.135V6.67497C0 6.51158 0.055579 6.37452 0.166737 6.2638C0.277509 6.15346 0.414912 6.0983 0.578947 6.0983H4.05263C4.21667 6.0983 4.35426 6.15346 4.46542 6.2638C4.57619 6.37452 4.63158 6.51158 4.63158 6.67497V10.135C4.63158 10.2984 4.57619 10.4352 4.46542 10.5456C4.35426 10.6563 4.21667 10.7117 4.05263 10.7117H0.578947Z"
              fill="white"
            />
          </svg>
        </Link>
        <Link
          href="/product-catalogue/electronics"
          _hover={{
            textDecoration: "underline",
          }}
          style={
            activeLink === "/product-catalogue/electronics"
              ? linkStyle._activeLink
              : linkStyle
          }
        >
          Gadgets and Accessories
        </Link>
        <Link
          href="/product-catalogue/clothing"
          style={
            activeLink === "/product-catalogue/clothing"
              ? linkStyle._activeLink
              : linkStyle
          }
        >
          Fashion
        </Link>
        <Link
          href="/product-catalogue/foods"
          _hover={{ textDecoration: "none" }}
          style={
            activeLink === "/product-catalogue/foods"
              ? linkStyle._activeLink
              : linkStyle
          }
        >
          Food and Drinks
        </Link>
        <Link
          href="/product-catalogue/groceries"
          _hover={{ textDecoration: "none" }}
          style={
            activeLink === "/product-catalogue/groceries"
              ? linkStyle._activeLink
              : linkStyle
          }
        >
          Groceries
        </Link>
        <Link
          href="/product-catalogue/#"
          _hover={{ textDecoration: "none" }}
          style={
            activeLink === "/product-catalogue/#"
              ? linkStyle._activeLink
              : linkStyle
          }
        >
          Other Categories
        </Link>
      </Flex>
    </Box>
  );
};

export default CategoryTab;

const useStyles = () => {
  return {
    linkStyle: {
      textDecoration: "none",
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: 400,
      _activeLink: {
        textDecoration: "none",
        color: "#fff",
        fontSize: "16px",
        fontWeight: 400,
        borderBottom: "3px solid #fff",
      },
    },
  };
};
