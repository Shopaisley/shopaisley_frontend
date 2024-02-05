import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import SideMenu from '../SideMenu'


function DashboardLayout() {
  return (
    <Box
        // transform={{ base: "translateX(-100%)", lg: "none" }}
        position="fixed"
        h="100vh"
        w="240px"
        // zIndex="10"
        borderRightColor={'lightgrey'}
        borderRightWidth={'0.1px'}
        className="side-menu"
        transition="transform 0.3s"
        bg="black"
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