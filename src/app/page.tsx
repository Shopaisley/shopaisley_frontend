// import Image from 'next/image'
// import styles from './page.module.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import CategoryBox from '@/components/CategoryBox'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideMenu from "@/components/SideMenu";
import DashboardLayout from '@/components/DashboardLayout';
import SellerHeader from '@/components/SellerHeader';
// import ProductCatalogue from './product-catalogue/page'

export default function Home() {
  return (
    // <ChakraProvider>
    <>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <DashboardLayout />
      <SellerHeader />

      </>
    // </ChakraProvider>
  )
}
