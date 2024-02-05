import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Flex,
    Box,
    Text
   
  } from '@chakra-ui/react'
 
    const OrderDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      
        <Box display={"flex"} flexDir={"column"} h={"460.38px"} w={"571.4px"} paddingLeft={"5%"} paddingTop={"5%"} bgColor={"white"}
        borderTopRightRadius={"20"}
        borderTopLeftRadius={"20"}
        borderBottomRightRadius={"20"}
        borderBottomLeftRadius={"20"}>
       
        <Flex
          flexDir={"column"}
         
          h={"100%"}
          w={"100%"}
          display={"flex"}
          position={"relative"}
        >
        <Box pb={"2%"} >
        <Text fontSize={"300%"}><strong>Order Details</strong></Text>
        <Text fontSize={"100%"}><strong>Order ID</strong></Text>    
        <Text fontSize={"80%"}>Order ID </Text> 
        </Box>
        <Box pb={"2%"}>
        <Text fontSize={"100%"}><strong>Order Items</strong></Text>
        <Text fontSize={"80%"}>Item 1</Text>    
        <Text fontSize={"80%"}>Item 2 </Text>
        <Text fontSize={"80%"}>Item 3 </Text>
        </Box>
        <Box pb={"2%"}>
        <Text fontSize={"100%"}><strong>Created At</strong></Text>    
        <Text fontSize={"80%"}>Time, Date</Text> 
        </Box>     
        
          <Flex
          flexDir={"column"}
          align={"center"}
          h={"100%"}
          w={"100%"}
          display={"flex"}
          position={"relative"}
        >
        <Button onClick={onOpen} colorScheme={"blue"}>Accept Order</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Order Accepted
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Flex>
        </Flex>
      </Box>
      
    );
  };
  
  export default OrderDetails;