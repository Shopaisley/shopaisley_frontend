// import './App.css'
import { Box } from "@chakra-ui/react";
import DashboardLayout from "./components/DashboardLayout";
import SellerHeader from "./components/SellerHeader";

function App() {
  return (
    <>
    <Box>
      <DashboardLayout />
      <SellerHeader userName="Ogechukwu"/>
    </Box>
    </>
  )
}

export default App
