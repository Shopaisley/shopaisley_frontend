import { Flex, Text } from "@chakra-ui/react"

const AdvertHeader = () => {
    return (
        <Flex
            color={"#FFFFFF"}
            fontWeight={500}
            align={'center'}
            justifyContent={'space-between'}
            bg={'#3E7CB1'}
            top={0}
            zIndex={10}
        >
            <Text fontSize="sm" m={'1rem'} ml={'2rem'}>
                NGN
            </Text>
            <Text fontSize="sm" mb={2}>
                FREE SHIPPING ON ALL ORDERS ABOVE NGN20,000.00 THIS BLACK FRIDAY!
            </Text>
            <Text fontSize="sm" textAlign='end' mr={'2rem'} mb={2}>
                Contact Us
            </Text>
        </Flex>
    )
}

export default AdvertHeader