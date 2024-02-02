// MainLayout.jsx
import { Flex } from '@chakra-ui/react';
import DashboardLayout from '../DashboardLayout';
import SellerHeader from '../SellerHeader';

function MainLayout() {
  return (
    <Flex>
      {/* Sidebar and Header Container */}
      <Flex>
        {/* Sidebar */}
        <DashboardLayout />

        {/* SellerHeader */}
        <SellerHeader userName="Ogechukwu" />
      </Flex>

      {/* Main Content */}
      {/* Add your main content components here */}
    </Flex>
  );
}

export default MainLayout;
