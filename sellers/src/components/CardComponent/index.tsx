import {
  Flex,
  Text,
  Box,
  HStack,
  Spacer,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  
} from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import { FC } from "react";

interface TotalComponentProps {
  name: any;
  number: string;
  percentage: string;
}

const Cardcomponent: FC<TotalComponentProps> = ({
  name,
  number,
  percentage,
}) => {
  // Function to determine the color based on the percentage value
  const getBadgeColor = (percentageValue: number): string => {
    if (percentageValue > 50) {
      return '#D0FCF4'; // Change this to the color you want for < 30%
    }  else {
      return '#FFD3D3'; // Change this to the color you want for >= 60%
    }
  };

  const getFontColor = (percentageValue: number): string => {
    if (percentageValue > 50) {
      return '#048859'; // 
    }  else {
      return '#D30000'; //
    }
  };

  const getType = (percentageValue: number): "increase" | "decrease" | undefined => {
    if (percentageValue > 50) {
      return "increase";
    } else {
      return "decrease";
    }
  };

  // Convert the percentage string to a number
  const parsedPercentage = parseFloat(percentage);

  return (
    
    <Stat bg={'white'} borderRadius={4} w={'270px'} >
      <StatHelpText color={'grey'}>
        <StatArrow color={getFontColor(parsedPercentage)}  type={getType(parsedPercentage)} mr={'4px'} />
        <Badge
          p={2}
          fontSize={'12px'}
          borderRadius={4}
          color={getFontColor(parsedPercentage)}
          bgColor={getBadgeColor(parsedPercentage)}
        >
          {percentage}
        </Badge>
        <StatLabel color={'black'} fontSize={'14px'} mb={'4px'}>
          {name}
        </StatLabel>
        {number}
      </StatHelpText>
    </Stat>
    
  );
};

export default Cardcomponent;
