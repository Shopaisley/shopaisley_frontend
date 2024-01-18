import LoginForm from "@/components/LoginForm";
import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import logo from "@/assets/images/shopaisley-logo.png";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import Image from "next/image";

const Page = () => {
    return (
        <Flex 
            h={"100vh"}
            bg="#EFF2F6"
            flexDir={"column"}
            align="center"
            pt={"20px"}
        >
            <Flex
                my={"30px"}
                flexDirection={"row"}
                // justifyItems={"center"}
                align={"center"}
            >
                <Image
                    src={logo}
                    alt="shopaisley-logo"
                    width={100}
                    height={100}
                />
                <Text
                    color={"#000000"}
                    fontFamily={"Public Sans"}
                    fontWeight={700}
                    fontSize={"28px"}
                >
                    Shop<span style={{color: "#054A91"}}>aisley</span>
                </Text>
            </Flex>
            <LoginForm />
            <Flex mt={"35px"} fontSize={"14px"} color="#FFFFFF" lineHeight="12px">
                <Text fontFamily={"Poppins"} fontWeight={500}>
                    <ChakraLink
                        href="/sign-up"
                        textDecoration="none"
                        color="#A9ABBD"
                        transition="color 0.3s ease"
                        _hover={{ color: '#B3B3B3' }}

                    >
                        Do not have an account? <span style={{ fontWeight: 700 }}>Register</span>
                    </ChakraLink>
                </Text>
            </Flex>
        </Flex>
    )
}

export default Page;