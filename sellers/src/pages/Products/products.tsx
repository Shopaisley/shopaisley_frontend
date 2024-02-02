import React, {useState} from "react";
import {
    Flex,
    Text,
    Box,
    Table,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import MainLayout from "../../components/MainLayout";
import data from "../../assets/DummyFiles/productdata.json"
import ProductsTable from "../../components/ProductTable";

function Products() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNewProductClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <MainLayout>
      <Flex alignContent={"center"} justifyContent={"space-between"}>
        <Text
          mt={"30px"}
          ml={"78px"}
          fontFamily={"Public Sans"}
          fontSize={"38px"}
          fontWeight={"800"}
          color={"black"}
        >
          Products
        </Text>
        <Button h={"40px"} size="md" mt={"30px"} mr={"80px"} onClick={handleNewProductClick}>
          {" "}
          New Product{" "}
        </Button>
      </Flex>
      <Box>
        <ProductsTable data={data} />
      </Box>

      {/* Modal for Editing */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MainLayout>
  );
}

export default Products;
