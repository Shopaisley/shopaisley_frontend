import { Box, Button, ChakraProvider, Flex, Grid, GridItem, Input, InputGroup, Text , Image, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Tag} from "@chakra-ui/react";



const order = () => {
return(
    <Flex fontFamily={"Public Sans"} backgroundColor={"black"}  pt={"5%"} flexDir={"column"} h={"100vh"} w={"100vw"}>
    
    <Box  display={"flex"} h={"100%"} w={"80%"} flexDir={"column"} pt={"5%"} bg={"white"} borderTopRightRadius={"20"}>
    
    <InputGroup >
            
            <Input
               
              placeholder="Search"
              marginLeft={10}
              marginRight={10}
              _placeholder={{ color: 'black', opacity: '0.4' }}
              w={"30rem"}
              border={'1px solid'}
              borderRadius={"8px"}
              borderColor={'black'}
              color={"black"}
              pl={'0.4rem'}
              
            />
             
        
          </InputGroup>
          <Box pt={"5%"} marginLeft={10}
              marginRight={10}>
            <Text fontSize={"230%"}>
                <strong>Orders</strong>
            </Text>
    <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>customer</Th>
        <Th>Date</Th>
        <Th>Paid</Th>
        <Th>Status</Th>
        <Th>Total</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td><strong>Bruno</strong><Text>brunoasika@gmail.com</Text></Td>
        <Td>12/10/2003</Td>
        <Td><Tag colorScheme="blue">yes</Tag></Td>
        <Td><Tag colorScheme="blue">shipped</Tag></Td>
        <Td>NGN10000</Td>
      </Tr>
      <Tr>
      <Td><strong>Jeffrey</strong><Text>jeffrey@gmail.com</Text></Td>
        <Td>12/10/2003</Td>
        <Td><Tag colorScheme="blue">yes</Tag></Td>
        <Td><Tag colorScheme="blue">shipped</Tag></Td>
        <Td>NGN10000</Td>
      </Tr>
      <Tr>
      <Td><strong>Alo</strong><Text>alo@gmail.com</Text></Td>
        <Td>12/10/2003</Td>
        <Td><Tag colorScheme="blue">yes</Tag></Td>
        <Td><Tag colorScheme="blue">shipped</Tag></Td>
        <Td>NGN10000</Td>
      </Tr>
    </Tbody>
    </Table>
    </TableContainer>
    </Box>
    </Box>
    
  </Flex>

);
};
export default order;

/*<ChakraProvider>
      <Box>
        <Grid templateColumns='repeat(2, 1fr)' h={"100vh"}>
          <GridItem
            bgColor={"black"}
            h={"100%"}
            w={"100%"}
          >
            <OrderDetails />
            <Box display={"flex"} h={"100%"} flexDir={"column"} mt={"5%"} ml={"30%"} bg={"white"}>

              <Text fontSize={"150%"} h={"100%"} mt={"10%"} ml={"80%"} color={"black"}>
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
    </ChakraProvider>
    */