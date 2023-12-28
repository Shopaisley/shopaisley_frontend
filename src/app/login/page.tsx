/* eslint-disable react/no-unescaped-entities */
import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/public-sans"; 

const Page = () => {
    return (
        <Flex
            w="100%"
            h="100%"
            bg="#F2F2F2"
            direction="column"
            align="center"
        >
            <Flex
                w= "500px"
                h="450px"
                bg="#ffffff"
                mt={"100px"}
            >

            </Flex>
            <Flex pt={16} fontSize={14} color="#FFFFFF" lineHeight="12px">
                <Text fontFamily={"Poppins"} fontWeight={500}>
                    <ChakraLink
                        href="/sign-up"
                        textDecoration="none"
                        color="#A9ABBD"
                        transition="color 0.3s ease"
                        _hover={{ color: '#B3B3B3' }}

                    >
                        Don't have an account? <span style={{fontWeight: 700}}>Register</span>
                    </ChakraLink>
                </Text>
            </Flex>
        </Flex>
    )
}

export default  Page;