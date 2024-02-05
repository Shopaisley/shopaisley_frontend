import React from 'react';
import { Box, Spinner, Text} from '@chakra-ui/react';

const Loader: React.FC = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
                boxSize="100px"
                position="relative"
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '2px solid',
                    borderColor: 'blue.500',
                    animation: 'spin 1s infinite linear',
                }}
            />
            <Text>
                Loading...
            </Text>
        </Box>
    );
};

export default Loader;

// import React from 'react';
// import { Box, Flex, Text, useColorModeValue, keyframes } from '@chakra-ui/react';

// const Loader = () => {
//   const primaryColor = useColorModeValue('hsl(223, 90%, 55%)', 'hsla(223, 10%, 90%, 0.1)');
// //   const bgColor = useColorModeValue('hsl(223, 10%, 90%)', 'hsl(223, 10%, 10%)');
// //   const fgColor = useColorModeValue('hsl(223, 10%, 10%)', 'hsl(223, 10%, 90%)');

// //   const cartLinesAnimation = keyframes`
// //     from, to {
// //       opacity: 0;
// //     }
// //     8%, 92% {
// //       opacity: 1;
// //     }
// //   `;

//   const cartTopAnimation = keyframes`
//     from {
//       stroke-dashoffset: -338;
//     }
//     50% {
//       stroke-dashoffset: 0;
//     }
//     to {
//       stroke-dashoffset: 338;
//     }
//   `;

//   const cartWheel1Animation = keyframes`
//     from {
//       transform: rotate(-0.25turn);
//     }
//     to {
//       transform: rotate(2.75turn);
//     }
//   `;

//   const cartWheel2Animation = keyframes`
//     from {
//       transform: rotate(0.25turn);
//     }
//     to {
//       transform: rotate(3.25turn);
//     }
//   `;

//   const cartWheelStrokeAnimation = keyframes`
//     from, to {
//       stroke-dashoffset: 81.68;
//     }
//     50% {
//       stroke-dashoffset: 40.84;
//     }
//   `;

//   const msgAnimation = keyframes`
//     from {
//       opacity: 1;
//       visibility: visible;
//     }
//     99.9% {
//       opacity: 0;
//       visibility: visible;
//     }
//     to {
//       opacity: 0;
//       visibility: hidden;
//     }
//   `;

//   return (
//     <Flex align="center" justify="center" direction="column" textAlign="center" maxW="20em" w="100%">
//       <Box as="svg" role="img" aria-label="Shopping cart line animation" viewBox="0 0 128 128" w="8em" h="8em">
//         <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8">
//           <g className="cart__track" stroke={primaryColor}>
//             <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
//             <circle cx="43" cy="111" r="13" />
//             <circle cx="102" cy="111" r="13" />
//           </g>
//           <g className="cart__lines" stroke="currentColor">
//             <polyline
//               className="cart__top"
//               points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
//               strokeDasharray="338 338"
//               strokeDashoffset="-338"
//               style={{ animation: `${cartTopAnimation} 2s ease-in-out infinite` }}
//             />
//             <g
//               className="cart__wheel1"
//               transform="rotate(-90,43,111)"
//               style={{ animation: `${cartWheel1Animation} 2s ease-in-out infinite` }}
//             >
//               <circle
//                 className="cart__wheel-stroke"
//                 cx="43"
//                 cy="111"
//                 r="13"
//                 strokeDasharray="81.68 81.68"
//                 strokeDashoffset="81.68"
//                 style={{ animation: `${cartWheelStrokeAnimation} 2s ease-in-out infinite` }}
//               />
//             </g>
//             <g
//               className="cart__wheel2"
//               transform="rotate(90,102,111)"
//               style={{ animation: `${cartWheel2Animation} 2s ease-in-out infinite` }}
//             >
//               <circle
//                 className="cart__wheel-stroke"
//                 cx="102"
//                 cy="111"
//                 r="13"
//                 strokeDasharray="81.68 81.68"
//                 strokeDashoffset="81.68"
//                 style={{ animation: `${cartWheelStrokeAnimation} 2s ease-in-out infinite` }}
//               />
//             </g>
//           </g>
//         </g>
//       </Box>
//       <Box className="preloader__text" position="relative" h="1.5em">
//         <Text className="preloader__msg" style={{ animation: `${msgAnimation} 0.3s 13.7s linear forwards` }} w="100%">
//           Bringing you the goods…
//         </Text>
//         <Text
//           className="preloader__msg"
//           css={{ animation: `${msgAnimation} 0.3s 13.7s linear forwards` }}
//           w="100%"
//         >
//           This is taking long. Something’s wrong.
//         </Text>
//       </Box>
//     </Flex>
//   );
// };

// export default Loader;

