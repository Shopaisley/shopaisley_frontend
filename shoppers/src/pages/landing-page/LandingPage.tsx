import React, {lazy, Suspense} from "react";
import { Box, Text, Image, Spacer, Flex, Link as ChakraLink } from "@chakra-ui/react";
import AdvertHeader from "../../components/AdvertHeader";
import { useTranslation } from 'react-i18next';
import "@fontsource/poppins";
import "@fontsource/public-sans";
import groceries from "../../assets/images/groceries.svg";
import cloth from "../../assets/images/cloth.svg";
import gadgets from "../../assets/images/gadgets.svg";
import girl from "../../assets/images/girl.svg";
import BlackHeader from "../../components/BlackHeader";
import Loader from "../../components/Loader";



function LandingPage() {
  const { t, i18n } = useTranslation();

  return (
    <Box bg={"#000"} h={"100%"} fontFamily={"Public Sans"}>
      <AdvertHeader />
      <BlackHeader />
      
      <Flex justifyContent={"space-around"} mt={"34px"}>
        <Box>
          <Text
            color={"#fff"}
            fontFamily={"Public Sans"}
            fontWeight={700}
            lineHeight={"normal"}
            fontSize={"64px"}
            mt={'35px'}
            ml={'40px'}
          >
            {t('landingPage.supermarketInPocket')}
          </Text>
          <Text color={"#fff"} ml={'40px'} fontSize={"24px"} fontFamily={"Public Sans"} mt={'12px'}>
          {t('landingPage.neverQueueAgain')}
          </Text>
        </Box>

        <Suspense fallback={<Loader />}>
          <Image src={girl} alt="shopping girl" loading="lazy"/>
        </Suspense>
      </Flex>

      <Flex justifyContent={"center"} mt={'47px'}>
        <Text
          alignItems={"center"}
          justifyItems={"center"}
          fontFamily={"Public Sans"}
          fontSize={"32px"}
          fontWeight={"600"}
          lineHeight={"normal"}
          letterSpacing={"-0.617px"}
          color={"#fff"}
        >
          {t('landingPage.aisleVisit')}
        </Text>
      </Flex>
      <Flex justifyContent={"space-around"}>
        <ChakraLink href="/product-catalogue/Clothing"><Image src={cloth} alt="cloth" mt={'27px'} loading="lazy"/></ChakraLink>
        
        <ChakraLink href="/product-catalogue/Groceries"><Image src={groceries} alt="groceries" loading="lazy"/></ChakraLink>
        
        <ChakraLink href="/product-catalogue/Electronics"><Image src={gadgets} alt="gadgets" loading="lazy"/></ChakraLink>
      </Flex>
    </Box>
  );
}

export default LandingPage;