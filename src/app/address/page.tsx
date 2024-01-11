import LoginForm from "@/components/LoginForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Flex, Text, Link as ChakraLink, Box } from "@chakra-ui/react";
import logo from "@/assets/images/shopaisley-logo.png";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import Image from "next/image";

const Page = () => {
    return (
        <Box>
            <Header></Header>
            <Footer></Footer>
        </Box>
    )
}

export default Page;