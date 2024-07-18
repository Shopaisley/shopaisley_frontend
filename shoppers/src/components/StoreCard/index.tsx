import { Box } from "@chakra-ui/react";
// import bgImage from "../../assets/images/gadgets.svg";
import { FC } from "react";

interface StoreCardProps {
    StoreName: string;
    StoreImage: string;
}

const StoreCard: FC<StoreCardProps> = ({StoreName, StoreImage}) => {
  return (
    <Box
      w={"222px"}
      h={"118px"}
      borderRadius={"8px"}
      fontFamily={"Value Sans Pro"}
      fontSize={"20px"}
      fontWeight={600}
      textAlign={"center"}
      color={"#FFFFFF"}
      alignContent={"center"}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${StoreImage})`,
        backgroundSize: "cover",
        mixBlendMode: "multiply",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
        {StoreName}
    </Box>
  );
};

export default StoreCard;
