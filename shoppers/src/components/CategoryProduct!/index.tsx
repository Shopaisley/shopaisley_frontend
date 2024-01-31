// import {
//   Box,
//   Flex,
//   Grid,
//   GridItem,
//   Text,
//   Image,
//   Button,
//   Link,
// } from "@chakra-ui/react";
// import React from "react";

// const CategoriesItem = ({ imageSrc, title }: any) => (
//   <GridItem p={"1rem"}>
//     <Box
//       boxShadow="rgba(0, 0, 0, 0.08) 0px 1px 4px"
//       bg="#3E7CB1"
//       borderRadius="1.5rem"
//       w="full"
//       h="full"
//       p={"2rem"}
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Image
//         src={imageSrc}
//         alt="Product Img"
//         h={"8rem"}
//         w={"8rem"}
//         borderRadius="2.5rem"
//         display={"block"}
//       />

//       <Text
//         mt={"2rem"}
//         fontSize="2xl"
//         alignContent={"center"}
//         display={"flex"}
//         justifyContent={"center"}
//       >
//         {title}
//       </Text>
//     </Box>
//   </GridItem>
// );

// const CategoryProduct = () => {
//   return (
//     <>
//       <Flex minH="100vh">
//         <Box
//           flex="1"
//           bg={"white"}
//           overflowX="auto"
//           ml={{ base: "0", lg: "300px" }}
//         >
//           <Box bg={"white"} p={"1rem"}>
//             <Box>
//               <Flex mr={"1rem"}>
//                 <Text
//                   ml={"2.2rem"}
//                   mt={{ base: "unset", lg: "2.9rem" }}
//                   fontSize={"1.7rem"}
//                   color={"#2a2a2a"}
//                 >
//                   Categories
//                 </Text>
//                 <Flex
//                   justifyContent={{ lg: "flex-end", base: "flex-end" }}
//                   display={{ base: "block", lg: "unset" }}
//                   gap={{ base: "2px", lg: "" }}
//                 >
//                   {/* <Button
//                     w={"fit-content"}
//                     mt={{ lg: "2.4rem", base: "1rem" }}
//                     bg="brand.lightsecondary !important"
//                     color="#ffffff"
//                     fontSize={{ lg: "1rem", base: "0.75rem" }}
//                     borderRadius={"0.5rem"}
//                     transition={"all 0.2s ease-in-out"}
//                     _hover={{ filter: "brightness(150%)" }}
//                     borderColor={"brand.primary"}
//                     type="submit"
//                     justifyContent={"flex-end"}
//                   >
//                     View All
//                   </Button> */}
//                 </Flex>
//               </Flex>
//             </Box>
//             <Grid
//               p={"1rem"}
//               h={"full"}
//               w={"100%"}
//               templateColumns={"repeat(5,1fr)"}
//               gap={6}
//               // overflow={"hidden"}
//             >
//               <CategoriesItem imageSrc="/assets/man9.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man0.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man2.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man0.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man2.jpg" title="A product" />
//             </Grid>

//             <Grid
//               p={"1rem"}
//               h={"full"}
//               w={"100%"}
//               templateColumns={"repeat(3,1fr)"}
//               gap={6}
//               // overflow={"hidden"}
//             >
//               <CategoriesItem imageSrc="/assets/man9.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man0.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man2.jpg" title="A product" />
//             </Grid>
//           </Box>

//           <Box bg={"white"} p={"1rem"}>
//             <Box>
//               <Flex mr={"1rem"} mt={"2rem"}>
//                 <Text
//                   ml={"2.2rem"}
//                   mt={{ base: "unset", lg: "2.9rem" }}
//                   fontSize={"1.7rem"}
//                   color={"black"}
//                 >
//                   Best Selling Products
//                 </Text>
//               </Flex>
//             </Box>
//             <Grid
//               p={"1rem"}
//               h={"full"}
//               w={"100%"}
//               templateColumns={"repeat(4,1fr)"}
//               gap={6}
//               // overflow={"hidden"}
//             >
//               <CategoriesItem imageSrc="/assets/man9.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man0.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man2.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man0.jpg" title="A product" />
//             </Grid>

//             <Grid
//               p={"1rem"}
//               h={"full"}
//               w={"100%"}
//               templateColumns={"repeat(1,1fr)"}
//               gap={6}
//               // overflow={"hidden"}
//             >
//               <CategoriesItem imageSrc="/assets/man9.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man0.jpg" title="A product" />
//             </Grid>
//           </Box>

//           <Box bg={"white"} p={"1rem"}>
//             <Box>
//               <Flex mr={"1rem"} mt={"2rem"}>
//                 <Text
//                   ml={"2.2rem"}
//                   mt={{ base: "unset", lg: "2.9rem" }}
//                   fontSize={"1.7rem"}
//                   color={"black"}
//                 >
//                   Daily Deals
//                 </Text>
//               </Flex>
//             </Box>
//             <Grid
//               p={"1rem"}
//               h={"full"}
//               w={"100%"}
//               templateColumns={"repeat(4,1fr)"}
//               gap={6}
//               // overflow={"hidden"}
//             >
//               <CategoriesItem imageSrc="/assets/man9.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man0.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man2.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man0.jpg" title="A product" />
//             </Grid>
//           </Box>

//           <Box bg={"white"} p={"1rem"}>
//             <Box>
//               <Flex mr={"1rem"} mt={"2rem"}>
//                 <Text
//                   ml={"2.2rem"}
//                   mt={{ base: "unset", lg: "2.9rem" }}
//                   fontSize={"1.7rem"}
//                   color={"black"}
//                 >
//                   Top Rated Products
//                 </Text>
//               </Flex>
//             </Box>
//             <Grid
//               p={"1rem"}
//               h={"full"}
//               w={"100%"}
//               templateColumns={"repeat(4,1fr)"}
//               gap={6}
//               // overflow={"hidden"}
//             >
//               <CategoriesItem imageSrc="/assets/man9.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man0.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man2.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man0.jpg" title="A product" />

//               <CategoriesItem imageSrc="/assets/man9.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man0.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man2.jpg" title="A product" />
//               <CategoriesItem imageSrc="/assets/man0.jpg" title="A product" />
//             </Grid>

//             <Grid
//               p={"1rem"}
//               h={"full"}
//               w={"100%"}
//               templateColumns={"repeat(1,1fr)"}
//               gap={6}
//               // overflow={"hidden"}
//             >
//               <CategoriesItem imageSrc="/assets/man9.jpg" title="A product" />
//             </Grid>
//           </Box>
//         </Box>
//       </Flex>
//     </>
//   );
// };

// export default CategoryProduct;
