import React, { lazy, Suspense } from "react";
import { Box, Text, Image, Flex, Link as ChakraLink } from "@chakra-ui/react";
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
      {/* <AdvertHeader /> */}
      <BlackHeader />
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        w={"100vw"}
        px={"10vw"}
      >
        <Flex
          // align={"center"}
          mt={"34px"}
        >
          <Box>
            <Text
              color={"#fff"}
              fontFamily={"Public Sans"}
              fontWeight={700}
              lineHeight={"normal"}
              fontSize={"64px"}
              mt={'135px'}
              ml={'40px'}
            >
              {t('landingPage.supermarketInPocket')}
            </Text>
            <Text color={"#fff"} ml={'40px'} fontSize={"24px"} fontFamily={"Public Sans"} mt={'12px'}>
              {t('landingPage.neverQueueAgain')}
            </Text>
          </Box>

          <Suspense fallback={<Loader />}>
            <Image src={girl} alt="shopping girl" loading="lazy" />
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
          <ChakraLink href="/product-catalogue/clothing"><Image src={cloth} alt="cloth" mt={'27px'} /></ChakraLink>

          <ChakraLink href="/product-catalogue/groceries"><Image src={groceries} alt="groceries" /></ChakraLink>

          <ChakraLink href="/product-catalogue/electronics"><Image src={gadgets} alt="gadgets" /></ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}

export default LandingPage;