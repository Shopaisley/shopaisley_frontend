import { Flex } from "@chakra-ui/react";
import SuccessMessage from "../../components/Success";

const Success = () => {
    return (
        <Flex>
            <SuccessMessage 
                status="success"
                title="Payment Successful!"
                message="Your order is completed successfully. Thank you for shopping with us!"
            />
        </Flex>
    );
}

export default Success;