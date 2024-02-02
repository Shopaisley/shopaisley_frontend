import { Box, Flex} from "@chakra-ui/react";
import OrderDetails from "../../components/OrderDetails";




const test = () => {
return(
    <Flex fontFamily={"Public Sans"} backgroundColor={"black"}  flexDir={"column"} h={"100vh"} w={"100vw"}>
    
        <Box display={"flex"} h={"100%"} w={"100%"} flexDir={"column"} paddingLeft={"10%"} paddingTop={"5%"} bg={"lightblue"}>
        <OrderDetails />
        </Box>
    
  </Flex>

);
};
export default test;

