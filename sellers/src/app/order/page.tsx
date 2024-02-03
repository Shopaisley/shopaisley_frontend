

import {
    Flex,
    Text,
    Link as ChakraLink,
    Box,
    Grid,
    Button, ButtonGroup,
    Divider,
    GridItem,
    Heading,
    Input,
    InputGroup,
    Checkbox,
    Table,
    Tr,
    Td,
    Th,
    Tfoot,
    Tbody,
    Thead,
    TableCaption,
    TableContainer,
    Switch,
    FormControl,
    FormLabel,
    Stack,
    Select,
  } from "@chakra-ui/react";

const Page = () => {
return(
<Box>
    <Grid templateColumns='repeat(1, 1fr)' h={"100vh"}>
    <GridItem
          bgColor={"black"}
          h={"100%"}
          w={"100%"}
        >
    <Box display={"flex"}  h={"100%"} flexDir={"column"} mt={"5%"} ml={"30%"} bg={"white"}>
        
            <Text fontSize={"150%"} h={"100%"} mt={"10%"}  ml={"80%"} color={"black"}>
              <strong>User</strong>
            </Text>
            
            <Flex
             
              h={"100%"}
              w={"100%"}
              display={"flex"}
              position={"relative"}
              >
            <Box bg={"white"} mt={"2.5%"} ml={"5%"} mr={"5%"} width={"100%"} height={"400px"}>
                <Text fontSize={"250%"} color={"black"}> <strong> Orders </strong> </Text>
               

                
            </Box>
            </Flex>
           
    </Box>
      
    </GridItem>
    </Grid>
</Box>
);
  };
export default Page;
