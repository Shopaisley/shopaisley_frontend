import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import SideMenu from '../SideMenu'


function DashboardLayout() {
  return (
    <Box
        // transform={{ base: "translateX(-100%)", lg: "none" }}
        position="fixed"
        h="100vh"
        w="280px"
        zIndex="1"
        borderRightColor={'lightgrey'}
        borderRightWidth={'0.1px'}
        className="side-menu"
        transition="transform 0.3s"
        bg="white"
      >
        <Flex
          h="full"
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <SideMenu />

          
        </Flex>
      </Box>
  )
}

export default DashboardLayout