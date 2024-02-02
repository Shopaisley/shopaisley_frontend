import {
  Flex,
  Text,
  Link as ChakraLink,
  Box,
  Table,
  HStack,
  
} from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import MainLayout from "../../components/MainLayout";
import Cardcomponent from "../../components/CardComponent";
import DashboardTable from "../../components/DashboardTable";
import data from "../../assets/DummyFiles/data.json"

const Dashboard = () => {
  return (
    <MainLayout>
    <Text mt={'30px'} ml={'78px'} fontFamily={'Public Sans'} fontSize={'24px'} fontWeight={'800'} color={'black'}>
        Weekly Statistics
      </Text>
    <HStack w={''} justifyContent={'space-around'} mt={'40px'} ml={'50px'} mr={'50px'} spacing={'100px'} fontFamily={'Public Sans'}>
        <Cardcomponent name={'Total Sales'} number={'1,240'} percentage={'80%'}/>
        <Cardcomponent name={'Total Consumers'} number={'400'} percentage={'29%'}/>
        <Cardcomponent name={'Total Stock Ordered'} number={'20,000'} percentage={'80%'}/>
    </HStack>
    <Box>
      <Text mt={'80px'} ml={'78px'} fontFamily={'Public Sans'} fontSize={'24px'} fontWeight={'800'} color={'black'}>
        Recent Orders
      </Text>
      <DashboardTable data={data}/>
     
    </Box>
      <Flex ml={'50px'} w={'full'}>
        {/* <Flex w={"3024px"} h={"713"} backgroundColor={"black"}  >
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
  
     
  
      </Flex> */}
        
        {/* <Flex flexDirection={"column"} mt={'2rem'}>
          <Box>
            <Text>Recent Orders</Text>
            <Table variant="simple" width="full">
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

          <Box mt={"4rem"}>
            <OrderComponent
              No={"#0000"}
              Customer={"Jeffrey"}
              Country={"Nigeria"}
              Status={"Pending"}
              Date={"12/1/2023"}
              Total={"1300"}
            ></OrderComponent>
          </Box>
        </Flex> */}
      </Flex>
      
    </MainLayout>
  );
};

export default Dashboard;
