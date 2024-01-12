import LoginForm from "@/components/LoginForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/SAButton";
import {
  Flex,
  Text,
  Link as ChakraLink,
  Box,
  Grid,
  Divider,
  GridItem,
  Heading,
  Input,
  InputGroup,
  Checkbox,
  Table,
  Tr,
  Td,
  Th,
  Tfoot,
  Tbody,
  Thead,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import logo from "@/assets/images/shopaisley-logo.png";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import Image from "next/image";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./index.css";

const Page = () => {
  return (
    <Box fontFamily={"Public Sans"}>
      <Header />
      <Grid templateColumns="repeat(2, 1fr)" h={"100vh"}>
        <GridItem
          bgColor={"#EFF2F6"}
          h={"100%"}
          paddingLeft={"10%"}
          paddingRight={"10%"}
        >
          <Box display={"flex"} flexDir={"column"} h={"100px"} mt={"10%"}>
            <Text fontSize={"230%"} h={"100%"}>
              <strong>Checkout</strong>
            </Text>
            <Flex
              flexDir={"row"}
              align={"center"}
              h={"100%"}
              w={"100%"}
              display={"flex"}
              position={"relative"}
            >
              <Text fontSize={"100%"}>
                <strong>Address</strong>
              </Text>
              <Divider
                w={"20%"}
                h={"1px"}
                ml={"10px"}
                mr={"10px"}
                bgColor={"black"}
              ></Divider>
              <Text fontSize={"100%"}>Shipping</Text>
              <Divider
                w={"20%"}
                h={"1px"}
                ml={"10px"}
                mr={"10px"}
                bgColor={"black"}
              ></Divider>
              <Text fontSize={"100%"}>Payment</Text>
            </Flex>
          </Box>

          <Box h={"390px"} mt={"3%"} mb={"15%"}>
            <Text fontSize={"150%"} mb={"10px"}>
              Shipping Information
            </Text>
            <InputGroup mb={"10px"}>
              <Input
                borderRadius={"0"}
                placeholder="First Name"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"49%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
              <Input
                borderRadius={"0"}
                placeholder="Last Name"
                ml={"2%"}
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"49%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <InputGroup mb={"10px"}>
              <Input
                borderRadius={"0"}
                placeholder="Address"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <InputGroup mb={"10px"}>
              <Input
                borderRadius={"0"}
                placeholder="Apartment, suite, etc (optional)"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <InputGroup mb={"10px"}>
              <Input
                borderRadius={"0"}
                placeholder="City"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <InputGroup mb={"10px"}>
              <Input
                borderRadius={"0"}
                placeholder="Country"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"30%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
                mr={"5%"}
              />
              <Input
                borderRadius={"0"}
                placeholder="City"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"30%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
                mr={"5%"}
              />
              <Input
                borderRadius={"0"}
                placeholder="Zipcode"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"30%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <InputGroup mb={"10px"}>
              <Input
                borderRadius={"0"}
                placeholder="Optional"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <Checkbox
              mt={"10px"}
              color={"#909090"}
              mb={"20px"}
              className="custom-checkbox"
            >
              Save contact information
            </Checkbox>
            <Button buttonText="Continue to Shipping"></Button>
          </Box>
        </GridItem>
        <GridItem
          bgColor={"#EFF2F6"}
          h={"100%"}
          paddingLeft={"10%"}
          paddingRight={"10%"}
        >
          <Box bgColor={"yellow"} mt={"20%"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
            ipsa iusto? Maxime alias, reprehenderit eum eos eligendi quo
            nesciunt nostrum, eveniet in non nam amet assumenda magnam tempora
            recusandae rem.
            <InputGroup mb={"10px"}>
              <Input
                borderRadius={"0"}
                placeholder="Enter coupon code here"
                _placeholder={{ color: "black", opacity: "0.4" }}
                w={"100%"}
                border={"2px solid"}
                borderColor={"#909090"}
                color={"black"}
                pl={"0.4rem"}
              />
            </InputGroup>
            <TableContainer>
              <Table variant="simple">
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
          {/* <Box h={"100%"} w={"80%"} display={"flex"} bgColor={"yellow"}>
                    <Text fontSize={"100%"}>Address</Text>
                    <Divider w={30} h={0.7} bgColor={"red"} mt={"10%"} ></Divider>
                    <Text>Address</Text>
                    <Divider w={10} h={1} bgColor={"green"}></Divider>
                    <Text>hi</Text>
                    </Box> */}
        </GridItem>
      </Grid>
      <Footer></Footer>
    </Box>
  );
};

export default Page;
