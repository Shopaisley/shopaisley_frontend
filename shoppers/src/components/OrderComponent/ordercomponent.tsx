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
              <Td>{No}</Td>
              <Td>{Customer}</Td>

              <Box pos={"relative"} right={'-45px'}>
              <Td>{Country}</Td>

              </Box>
              
              <Td>
                <Box pos={"relative"} right={'-60px'}>
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
              <Box  pos={"relative"} right={'-45px'}>
              <Td>{Date}</Td>

              </Box>
              
              <Td>N{Total}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
 );
};

export default OrderComponent;