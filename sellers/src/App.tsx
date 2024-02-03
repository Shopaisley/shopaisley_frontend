// import './App.css'
import { Box } from "@chakra-ui/react";
import MainLayout from "./components/MainLayout";
import SellerHeader from "./components/SellerHeader";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Order } from "./Routes";





function App() {

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/order" element={<Order/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App



