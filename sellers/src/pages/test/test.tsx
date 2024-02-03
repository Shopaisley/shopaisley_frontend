import { Box, Flex} from "@chakra-ui/react";
import EditProduct from "../../components/EditProduct";




const test = () => {
return(
    <Flex fontFamily={"Public Sans"} backgroundColor={"black"}  flexDir={"column"} h={"100vh"} w={"100vw"}>
    
        <Box display={"flex"} h={"100%"} w={"100%"} flexDir={"column"} bg={"lightblue"}>
        <EditProduct />
        </Box>
    
  </Flex>

);
};
export default test;

