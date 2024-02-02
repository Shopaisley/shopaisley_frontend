import { Box } from "@chakra-ui/react"
import AdvertHeader from "../../components/AdvertHeader"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ProductView from "../../components/ViewProduct"

const Product = () => {
    return (
        <Box
            bg={"#E2E8F0"}
            fontFamily={"Public Sans"}
        >
            <AdvertHeader />
            <Header />
            <Box
                w={"100%"}
                px={"10vw"}
                mb={"50px"}
            >
                
                <ProductView />
            </Box>
            <Footer />
        </Box>
    )
}

export default Product;