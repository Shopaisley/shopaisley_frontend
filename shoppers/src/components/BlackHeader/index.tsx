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
import shoppingBag from '../../assets/icons/shopping-bag.svg';
import searchBar from '../../assets/icons/fi-rr-search.svg';
import logo from "../../assets/images/shopaisley-logo.png";
import { useTranslation } from 'react-i18next';
import "@fontsource/public-sans";
import "@fontsource/poppins";
import { useEffect, useState } from 'react';
import {
  useLocation,
  // useNavigate
} from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';


const BlackHeader = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const { linkStyle } = useStyles();
  const { t, i18n } = useTranslation();

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
    <Box fontFamily={"Public Sans"} borderBottom={"0.1px solid #909090"} position="sticky" top={0} zIndex={10}
      boxShadow={"rgba(0, 0, 0, 0.2) 0px 4px 8px 0px"}
    >
      <Flex
        as={"nav"}
        align="center"
        justifyContent={'space-between'}
        bg={'black'}
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
                color={"#fff"}
                fontFamily={"Public Sans"}
                fontWeight={700}
                fontSize={"21px"}
              >
                Shop<span style={{ color: "#054A91" }}>aisley</span>
              </Text>
            </Flex>
          </ChakraLink>
          
          <LanguageSwitcher />
          
        </Flex>


        {/* Search Bar */}
        


        {/* Login Button */}
        <Flex
          flexDir={"row"}
          justify={"center"}
          align="center"
        >
          
          <ChakraLink
            href='/'
            
            color={'white'}
            fontWeight={'400'}
            mr={4}
            _hover={{
              borderBottom: "3px solid #054A91",
              color: "#054A91",
              transition: "0.2s ease-in"
            }}
          >
            {t('blackHeader.sell')}
          </ChakraLink>
         
          <ChakraLink
            href='/login'
            bgColor={'#054A91'}
            color={'white'}
            as={Button}
            // mr={'2rem'}
            fontWeight={'400'}
            _hover={{
              textDecor: "none",
              bgColor: "white",
              color: "black"
            }}
          >
          {t('blackHeader.sign')}
          </ChakraLink>
          
        </Flex>
        
      </Flex>
    </Box>
  );
};

export default BlackHeader;


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
