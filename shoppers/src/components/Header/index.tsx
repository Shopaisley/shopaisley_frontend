import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  Input,
  InputGroup,
  Button,
  Image
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import shoppingBag from '../../assets/icons/shopping-bag.svg';
import searchBar from '../../assets/icons/fi-rr-search.svg';
import logo from "../../assets/images/shopaisley-logo.png";
import "@fontsource/public-sans";
import "@fontsource/poppins";
import { useEffect, useState } from 'react';
import {
  useLocation,
  // useNavigate
} from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';



const Header = () => {
  // const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const { linkStyle } = useStyles();

  // useEffect(() => {
  //   const currentPath = location.pathname;

  //   if (currentPath === '/product-catalogue/Clothing') {
  //     navigate('/product-catalogue/Clothing');
  //   }
  // }, [navigate, location]);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);


  // const handleNavLinkClick = (category: string) => {
  //   // Update the URL when a navigation link is clicked
  //   navigate(`/product-catalogue/${category}`);
  // };
  return (
    <Box fontFamily={"Public Sans"} borderBottom={"1px solid #909090"} position="sticky" top={0} zIndex={10}
      boxShadow={"rgba(0, 0, 0, 0.2) 0px 4px 8px 0px"}
    >
      <Flex
        as={"nav"}
        align="center"
        justifyContent={'space-between'}
        bg={'white'}
        px={'2rem'}
        py={'1.3rem'}
        width="100%"
        position="sticky"
        top={0}
        zIndex={"100"}
      >
        <Flex align="center" alignContent={'space-around'} >
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
                alt="shopaisley-logo"
                width={"40px"}
                height={"40px"}
              />
              <Text
                color={"#000000"}
                fontFamily={"Public Sans"}
                fontWeight={700}
                fontSize={"21px"}
              >
                Shop<span style={{ color: "#054A91" }}>aisley</span>
              </Text>
            </Flex>
          </ChakraLink>
          <Flex
            flexDir={"row"}
            w={"12vw"}
            gap={"25px"}
            marginX={"4vw"}
            justify={"center"}
          >
            <ChakraLink
              // onClick={() => handleNavLinkClick("Clothing")}
              href={"/product-catalogue/Clothing"}
              color="black"
              _hover={{ borderBottom: "3px solid #054A91", transition: "0.2s ease-in-out", }}
              style={activeLink === "/product-catalogue/Clothing" ? linkStyle._activeLink : linkStyle}
            >
              {t('Header.cloth')}
            </ChakraLink>
            <ChakraLink
              // onClick={() => handleNavLinkClick("Clothing")}
              href={"/product-catalogue/Groceries"}
              color="black"
              _hover={{ borderBottom: "3px solid #054A91", transition: "0.2s ease-in-out", }}
              style={activeLink === "/product-catalogue/Groceries" ? linkStyle._activeLink : linkStyle}
            >
              {t('Header.groc')}
            </ChakraLink>
            <ChakraLink
              // onClick={() => handleNavLinkClick("Clothing")}
              href={"/product-catalogue/Electronics"}
              color="black"
              _hover={{ borderBottom: "3px solid #054A91", transition: "0.2s ease-in-out", }}
              style={activeLink === "/product-catalogue/Electronics" ? linkStyle._activeLink : linkStyle}
            >
              {t('Header.elect')}
            </ChakraLink>
          </Flex>
          <InputGroup ml={'4rem'}>
            <Image src={searchBar} alt='seachBar' width={"20px"}></Image>
            <Input
              placeholder="Search"
              marginLeft={3}
              marginRight={3}
              _placeholder={{ color: 'black', opacity: '0.4' }}
              w={"30rem"}
              border={'2px solid'}
              borderRadius={"8px"}
              borderColor={'black'}
              color={"black"}
              pl={'0.4rem'}
            />
            <Button
              h="2rem"
              size="md"
              marginTop={1}
              color={"white"}
              fontSize={"14px"}
              fontWeight={500}
              bg={"#054A91"}
              borderColor={'black'}
              borderRadius={'4px'}
              px={"12px"}
              py={"16px"}
              lineHeight={"16px"}
              _hover={{
                backgroundColor: 'white',
                color: 'white',
                cursor: 'pointer',
                bgColor: '#3E7CB1',
                // borderColor: '#3E7CB1',
                // border: "2px solid"
              }}
              boxShadow={"rgba(0, 0, 0, 0.2) 0px 4px 8px 0px"}
            >
              {t('Header.search')}
            </Button>
          </InputGroup>
        </Flex>


        {/* Search Bar */}

        <LanguageSwitcher />

        {/* Login Button */}
        <Flex
          flexDir={"row"}
          justify={"center"}
          align="center"
        >
          <Flex>
            <Image src={shoppingBag} alt='shopping bag' width={"20px"}></Image>
            <Text color={'black'} mr={'1rem'} ml={'0.3rem'} mt={'0.2rem'}>0</Text>
          </Flex>
          <ChakraLink
            href='/login'
            color={'black'}
            fontWeight={'600'}
            _hover={{
              textDecor: "none"
            }}
          >
            {t('Header.sign')}
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;


const useStyles = () => {
  return {
    linkStyle: {
      textDecoration: "none",
      color: "#000000",
      fontFamily: "Public Sans",
      fontSize: "16px",
      fontWeight: 400,
      _activeLink: {
        textDecoration: "none",
        color: "#000000",
        fontFamily: "Public Sans",
        fontSize: "16px",
        fontWeight: 400,
        borderBottom: "3px solid #054A91",
      },
    },
  }
};
