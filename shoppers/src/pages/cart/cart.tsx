import { Box,Flex, Text ,Grid , GridItem ,Link as ChakraLink, Divider, Stack, Input} from "@chakra-ui/react";
// import logo from "../../assets/images/shopaisley-logo.png";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryBox from "../../components/CategoryBox";
import SAButtons from "../../components/SAButton";

const Cart =()=>{

    return(    
       <Box>
        <Header/>
        
        <Grid   
            templateAreas={`"cart ordersum"
                            "orderinfo blank" `}   
            gridTemplateRows={'100px 1fr 200px'}//height fractional unit width
            gridTemplateColumns={'594px 1fr'}
            h={"1000px"}
            gap = '100'
            pl='220px'
            
        >
       
         <GridItem   pt='22px'  area={'cart'}>
            <Text fontSize={30} as='b'>
                    Your Cart
            </Text>
            <Text>
            Not ready to checkout?<ChakraLink textDecoration="none" href="/" color={"#003EB6"}>
                Continue Shopping
            </ChakraLink>
            </Text>
            <Flex align="center" pt="21.34px" pb="15.33px">
                <CategoryBox categoryName={""} categoryImage={undefined}/>
                <Stack direction='column' p={"6.171px 5.143px"}>
                    <Text fontSize={"23px"}>
                        iPhone 15
                    </Text>
                    <Text fontSize={"14px"}>
                        Specification:250GB
                    </Text>
                    <Text fontSize={"14px"}>
                    Quantity : 1
                    </Text>
                    <Stack direction='row'> 
                        <Text fontSize={"23px"}> NGN 1,050,00</Text>
                        <ChakraLink textDecoration="none" href="/cart" pt="7px" pl="200px"> Remove </ChakraLink>
                    </Stack>
                </Stack>
            </Flex>
            <Divider orientation='horizontal' color={"#909090"} size={"20px"} borderWidth={"2px"} />
            <Flex align="center" pt="21.34px" pb="15.33px">
                <CategoryBox categoryName={""} categoryImage={undefined}/>
                <Stack direction='column' p={"6.171px 5.143px"}>
                    <Text fontSize={"23px"}>
                    iPhone 15 Magsafe Case
                    </Text>
                    <Text fontSize={"14px"}>
                        Specification:Pink
                    </Text>
                    <Text fontSize={"14px"}>
                    Quantity : 1
                    </Text>
                <Stack direction='row'> 
                    <Text fontSize={"23px"}> NGN 50,000</Text>
                    <ChakraLink textDecoration="none" href="/cart" pt="7px" pl="215px"> Remove </ChakraLink>
                    
                </Stack>
                </Stack>
            </Flex>
        </GridItem>
        <GridItem pl='100px' pt='65px'  area={'ordersum'}>
            <Stack direction={"column"}>
            <Text fontSize={"23px"} as='b' pb={"29px"}>
                Order Summary
            </Text>
            <Input placeholder="Enter coupon code here" w={"408px"} />
            <Stack direction={"row"} pt={"28px"}>
                <Text>
                    Subtotal
                </Text>
                <Text pl="240px">
                    NGN 1,100,00
                </Text>
            </Stack>
            <Stack direction={"row"} pt={"16px"} pb={"16px"}> 
                <Text> 
                    Shipping
                </Text>
                <Text pl="150px">
                    Calculated at the next step
                </Text>
            </Stack>
            <Divider orientation='horizontal' color={"#000"} borderWidth={"2px"} w={"408px"}/>
            <Stack direction={"row"} pt={"16px"} pb={"36px"}>
                <Text>
                    Total
                </Text>
                <Text pl="340px">
                    0.00
                </Text>
            </Stack>
            <SAButtons buttonText="Checkout" linkTo={"/checkout/shipping"}/>
            </Stack>
        </GridItem>
        <GridItem pt='331px' pb='105px'area={'orderinfo'}>
                <Text fontSize={"23px"} pb={"15px"} as={"b"}>
                    Order Infromation
                </Text>
                <Divider orientation="horizontal"/>
                <Stack direction={"row"}  pt={"16px"} pb={"11px"}>
                    <Stack direction={"column"}>
                    <Text fontSize={"12px"} pt={"11px"} >
                        Return Policy
                        </Text>
                    <Text fontSize={"12px"} pt={"11px"}>
                        This is our example return policy which is everything you need to know about our returns.
                    </Text>
                    </Stack>
                     <Text pl= "70px" > - </Text>
                </Stack>
                <Divider orientation="horizontal"/>
                <Stack direction={"row"} pt={"16px"} pb={"11px"}>
                    <Text fontSize={"12px"}>
                        Shipping Options
                    </Text>
                    <Text pl="450px"> + </Text>
                </Stack>
                <Divider orientation="horizontal"/>
                <Stack direction={"row"}  pt={"16px"} pb={"11px"}>
                    <Text fontSize={"12px"}>
                        Shipping Options
                    </Text>
                    <Text pl="450px"> + </Text>
                </Stack>
                <Divider orientation="horizontal"/>
        </GridItem>
        
        </Grid>

        <Footer/>

        </Box>
       
    )

}
export default Cart;