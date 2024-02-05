// MainLayout.jsx
import { Flex, Box } from '@chakra-ui/react';
import DashboardLayout from '../DashboardLayout';
import SellerHeader from '../SellerHeader';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function MainLayout({children} : LayoutProps) {
  return (
    <Flex
    minH={"90vh"}
    zIndex={0}
    w={"full"}

    >
      <DashboardLayout />
      <Flex
      flexDirection={"column"} 
      mt={'-10px'}
      ml={"240px"}
      w={"1370px"}
      >
        <SellerHeader userName="Ogechukwu" />
        <Box mt={"8rem"} bg={'white'} h={'80vh'} w={"full"}>
        {children}
        </Box>
      </Flex>

      
    </Flex>
  );
}

export default MainLayout;
