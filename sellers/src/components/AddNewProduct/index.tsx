import {
    
    Flex,
    Box,
    Grid,
    GridItem,
    Text,
    Input,
    InputGroup,
    Select
   
  } from '@chakra-ui/react'

import SaveProduct from '../SaveProduct';
 
    const AddNewProduct = () => {
    
    return (
      
        <Box fontFamily={"Public Sans"}>
      
      <Grid templateColumns="repeat(2, 1fr)" h={"100vh"}>
        <GridItem
          bgColor={"#EFF2F6"}
          h={"100%"}
          paddingLeft={"5%"}
          
        >
          
          <Flex flexDir={"column"}
              
              h={"100%"}
              w={"90%"}
              display={"flex"}
              position={"relative"}
              >
          <Box display={"flex"} flexDir={"column"} h={"50px"} mt={"5%"} mb={"1%"}>
            <Text fontSize={"200%"} h={"100%"}>
              <strong>Add New Product</strong>
            </Text>
            
            <Text fontSize={"150%"} h={"100%"}>
              <strong>Basic Information</strong>
            </Text>
            </Box>
            <Box display={"flex"} flexDir={"column"} ml={"10%"} h={"50%"} mt={"5%"} mb={"10%"}>
        <Text  fontSize={"80%"} h={"100%"}>
              <strong>Name</strong>
            </Text>
            <InputGroup mb={"1%"}>
              <Input
                borderRadius={"0"}
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            
            </InputGroup> 
            <Text  fontSize={"80%"} h={"100%"}>
              <strong>Description</strong>
            </Text>
            <InputGroup mb={"2%"}>
              <Input
                borderRadius={"0"}
                
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                h={"65px"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            
            </InputGroup>
           
            <Text  fontSize={"80%"} h={"100%"}>
              <strong>Brand name</strong>
            </Text>
            <InputGroup mb={"2%"}>
              <Input
                borderRadius={"0"}
                
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            
            </InputGroup>
            <Text  fontSize={"80%"} h={"100%"}>
              <strong>Category</strong>
            </Text>
            <InputGroup mb={"2%"}>
              <Input
                borderRadius={"0"}
                
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            
            </InputGroup>  

            <Text  fontSize={"80%"} h={"100%"}>
              <strong>Unit Price(in naira)</strong>
            </Text>
            <InputGroup >
              <Input
                borderRadius={"0"}
                
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            
            </InputGroup> 

             
           
        </Box>
        <Flex flexDir={"column"} ml={"10%"}>
        <Text  fontSize={"100%"} h={"20%"} mb={"1%"}>
              <strong>Cover Image</strong>
            </Text>
            <Box display={"flex"} flexDir={"column"}  border={"1px solid"} h={"65px"} w={"65px"}>
             
             </Box>
        </Flex>
        
        </Flex> 
          
          
          
        </GridItem>
        
        <GridItem
          bgColor={"#EFF2F6"}
          h={"100%"}
          paddingLeft={"10%"}
          
        >
         <Flex flexDir={"column"}
              
              h={"100%"}
              w={"90%"}
              display={"flex"}
              position={"relative"}
              >
          <Box display={"flex"} flexDir={"row"} h={"50px"} mt={"5%"} justifyContent={"space-between"}>
            
            <Text fontSize={"150%"} h={"100%"}>
            <strong>Preview</strong>
            </Text>
            <SaveProduct />
            </Box>
            <Box display={"flex"} flexDir={"column"} h={"50%"} >
            <InputGroup mb={"3%"}>
              <Input
                borderRadius={"0"}
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                h={"300px"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            
            </InputGroup> 
            <Flex flexDir={"column"}>
            <Text fontSize={"100%"} h={"100%"}>
              <strong>Product name</strong>
            </Text>

             <Text fontSize={"80%"} h={"100%"}>
              Price
            </Text>
           
            <Text fontSize={"80%"} h={"100%"} mb={"5%"}>
              Description
            </Text>
            <Select mb={"5%"} border={"1px solid"} placeholder='Variant'>
             <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
            </Select>
            </Flex>

            <Text  fontSize={"80%"} h={"100%"}>
              <strong>Amount in stock</strong>
            </Text>
            <InputGroup >
              <Input
                borderRadius={"0"}
                
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            
            </InputGroup>  
            
        </Box>

        </Flex>     
          
        </GridItem>
      </Grid>
      
    </Box>
      
    );
  };
  
  export default AddNewProduct;