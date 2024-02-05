import { useState } from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import MainLayout from "../../components/MainLayout";
import data from "../../assets/DummyFiles/orderdata.json";
import OrderTable from "../../components/OrderTable";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Box
      pos={"fixed"}
      top={"0"}
      left={"0"}
      w={"100%"}
      h={"100%"}
      bg={"rgba(0, 0, 0, 0.5)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box bg={"#fff"} p={"20px"} borderRadius={"8px"}>
        {children}
      </Box>
    </Box>
  );
};

function Orders() {
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
          Orders
        </Text>
        
      </Flex>
      <Box>
        <OrderTable data={data} />
      </Box>

      {/* Modal for Editing */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <>
          <Text>Title</Text>
          <Box>
            <Text>Title</Text>

            <Box mt={"20px"}>
              <Button onClick={handleCloseModal}>Close</Button>
            </Box>
          </Box>
        </>
      </Modal>
    </MainLayout>
  );
}

export default Orders;
