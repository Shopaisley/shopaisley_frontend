import React, { FC } from 'react';
import {
 Table,
 Thead,
 Tbody,
 Tfoot,
 Tr,
 Th,
 Td,
 Flex,
 Box,
 Grid,
 Divider,
 GridItem,
 Heading,
 Text,
 Button,
 useColorModeValue,
} from '@chakra-ui/react';

interface OrderComponent {
  No: string;
  Customer: string;
  Country: string;
  Status: string;
  Date: string;
  Total: string;
}


const OrderComponent: FC<OrderComponent> = ({No,Customer,Country,Status,Date,Total}) => {


 return (
    <Flex width="full" align="center" justifyContent="center">
      <Box bg="white"  width="900px">
        <Table variant="simple" width="full">
          <Tbody>
            <Tr>
                <Box  pos={"relative"} right={'-45px'} top={"-50px"}> <Td>{No}</Td></Box>
              
                <Box pos={"relative"} right={'-196px'} top={"-82px"}> <Td>{Customer}</Td></Box>
              

              <Box pos={"relative"} right={'-407px'} top={"-112px"}>
              <Td>{Country}</Td>

              </Box>

              <Td>
                <Box pos={"relative"} right={'-520px'}  top={"-84px"}>
                <Button
                 size="sm"
                backgroundColor={"rgba(208, 252, 244, 1)"}

                 fontSize="sm"
                 color={"rgba(4, 136, 89, 1)"}
                 px={3}
                 py={1}
                 rounded="sm"
                >
                 {Status}
                </Button>

                </Box>

              </Td>
              <Box  pos={"relative"} right={'-578px'} top={"-54px"}>
              <Td>{Date}</Td>

              </Box>

              <Box  pos={"relative"} right={'-710px'} top={"-85px"}>

              <Td>N{Total}</Td>
              </Box>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
 );
};

export default OrderComponent;