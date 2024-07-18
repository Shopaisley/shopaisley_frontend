import { Flex, Text, Link as ChakraLink, Image } from "@chakra-ui/react";
import logo from "../../assets/images/campuscart-logo.svg";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import SignupForm from "../../components/SignupForm";

const Signup = () => {
  return (
    <Flex
      // h={"100vh"}
      bg="#EFF2F6"
      flexDir={"column"}
      align="center"
      pt={"20px"}
    >
      <Image
        src={logo}
        alt="shopaisley-logo"
        width={"250px"}
        height={"100px"}
        my={"30px"}
      />
      <SignupForm />
      <Flex
        mb={"15px"}
        mt={"35px"}
        fontSize={"14px"}
        color="#FFFFFF"
        lineHeight="12px"
      >
        <Text fontFamily={"Poppins"} fontWeight={500}>
          <ChakraLink
            href="/login"
            textDecoration="none"
            color="#A9ABBD"
            transition="color 0.3s ease"
            _hover={{ color: "#B3B3B3" }}
          >
            Already have an account?{" "}
            <span style={{ fontWeight: 700 }}>Login</span>
          </ChakraLink>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Signup;
