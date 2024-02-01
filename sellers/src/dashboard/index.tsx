import {
    Flex,
    Text,
    Link as ChakraLink,
    Box,
    Grid,
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
  
  
  
  
  
  
  import TotalComponent from "../components/TotalComponent/totalcomponent";
  import OrderComponent from "../components/OrderComponent/ordercomponent";
  
  
  
  
  const Page = () => {
      
    return (
  <Flex style={{
          height: '100vh',
          overflow: 'hidden',
          width:'193vh'
        }}>
  
  
      <Flex w={"3024px"} h={"713"} backgroundColor={"black"}  >
          <Flex pos={"relative"} top={"-24px"}>
  
        
          <Flex color="white" fontWeight={"bold"} fontSize={"25px"} pos={"relative"} top={"63px"} right={"-39px"}>
              <p > Shopaisley</p>
          </Flex>
  
          <Flex color="white"  fontSize={"15px"} pos={"relative"} top={"136px"} right={"81px"}>
              <p > Dashboard</p>
          </Flex>
  
          <Flex color="white"  fontSize={"15px"} pos={"relative"} top={"186px"} right={"158px"}>
              <p > Products</p>
          </Flex>
  
          <Flex color="white"  fontSize={"15px"} pos={"relative"} top={"236px"} right={"220px"}>
              <p > Orders</p>
          </Flex>
  
          <Flex color="white"  fontSize={"15px"} pos={"relative"} top={"285px"} right={"267px"}>
              <p > Notifications</p>
          </Flex>
  
          <Flex color="white"  fontSize={"15px"} pos={"relative"} top={"325px"} right={"356px"}>
              <p> Settings</p>
          </Flex>
  
  
          </Flex>
  
      <Flex w={"3024px"} h={"713px"} backgroundColor={"white"} pos={"relative"} top={"41px"} right={"216px"} borderRadius={"20px"} >
  
      <Flex pos={"relative"} right={"-60px"} top={"41px"} borderRadius={"12px"}>
      <Input width='503px' h={'25px'}  borderRadius={"10px"} placeholder='Search' />
  
      </Flex>
  
      <Flex color="black" fontWeight={"bold"}  fontSize={"20px"} pos={"relative"} top={"21px"} right={"-397px"}>
          <p>User</p>
      </Flex>
      <Flex pos={"relative"} right={"490px"} top={'292px'} fontWeight={"bold"} fontSize={"22px"}>
        <p>Recent Orders</p>
      </Flex>
  
      <Flex  w={"30px"} h={"30px"} backgroundColor={"#D9D9D9"} pos={"relative"} top={"41px"} right={"-290px"} borderRadius={"50%"} >
  
      </Flex>
  
      </Flex>
      
      <Flex  pos={"relative"} right={"-620px"}>
      <Flex pos={"relative"} top={"151px"} right={"2388px"}>
      <TotalComponent name={"sales"} number={"N200"} percentage={"34"}></TotalComponent>
     
  
      </Flex>
  
      <Flex pos={"relative"} top={"151px"} right={"2360px"}>
      <TotalComponent name={"customers"} number={"23"} percentage={"12"}></TotalComponent>
  
      
  
      </Flex>
  
      <Flex pos={"relative"} top={"151px"} right={"2330px"}>
      <TotalComponent name={"stock ordered"} number={"670"} percentage={"16"}></TotalComponent>
      
     
  
      </Flex>
  
  
  
      </Flex>
  
     
  
      </Flex>
      <Flex pos={"relative"} top={'19px'}>
  
  
  
     
  
      <Box pos={"relative"} right={"2670px"} top={'389px'}>
          <Table variant="simple" width="900px">
            <Thead>
              <Tr>
                <Th color={"rgba(122, 122, 122, 1)"}>No</Th>
                <Th color={"rgba(122, 122, 122, 1)"}>Customer</Th>
                <Th color={"rgba(122, 122, 122, 1)"}>Country</Th>
                <Th color={"rgba(122, 122, 122, 1)"}>Status</Th>
                <Th color={"rgba(122, 122, 122, 1)"}>Date</Th>
                <Th color={"rgba(122, 122, 122, 1)"}>Total</Th>
              </Tr>
            </Thead>
            </Table>
          </Box>
        
  
        <Box pos={"relative"} right={"3600px"} top={'489px'}>
  <OrderComponent No={"#0000"} Customer={"Jeffrey"} Country={"Nigeria"} Status={"Pending"} Date={"12/1/2023"} Total={"1300"} ></OrderComponent>
  
        </Box>
        </Flex>
  
  
          
  
      
      
  
      </Flex>
    );
  };
  
  export default Page;