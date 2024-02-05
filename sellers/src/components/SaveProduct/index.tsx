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
    Box
    
   
  } from '@chakra-ui/react'
 
    const SaveProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      
      <Box>
        <Button onClick={onOpen} colorScheme={"blue"}>Save Product</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Product saved
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Box>      
    );
  };
  
  export default SaveProduct;