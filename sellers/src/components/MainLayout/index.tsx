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
    minH={"100vh"}
    zIndex={0}
    w={"full"}

    >
      <DashboardLayout />
      <Flex
      flexDirection={"column"} 
      ml={"240px"}
      w={"1370px"}
      >
        <SellerHeader userName="Ogechukwu" />
        <Box mt={"8rem"}>
        {children}
        </Box>
      </Flex>

      
    </Flex>
  );
}

export default MainLayout;
