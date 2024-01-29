/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button} from "@chakra-ui/react";
import { FC } from "react";
import "@fontsource/public-sans";

interface SubmitBtnProps {
    btntitle: string;
    isLoading?: any;
    onClick?: any;
    loadingText?: any;
    rest?: any;

}
const SubmitBtn: FC<SubmitBtnProps> = ({
    btntitle,
    isLoading,
    onClick,
    loadingText,
    rest,
}) => {
    const { btnBox } = useStyles();
    return (
        <Button {...btnBox}
            as='button'
            w={"100%"}
            isLoading={isLoading}
            onClick={onClick}
            {...rest}
            type="submit"
            loadingText={loadingText}
            _hover={{ bg: "#3E7CB1", color: "#FFFFFF" }}
        >
            {btntitle}
        </Button>
    );
};

export default SubmitBtn;

const useStyles = () => {
    return {
        btnBox: {
            background: "#062B6F",
            fontWeight: "800",
            fontFamily: 'Public Sans',
            fontSize: "14",
            textAlign: 'center',
            color: '#FFFFFF',
            cursor: 'pointer',
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "8",
            borderTopRightRadius: "8",
            borderTopLeftRadius: "8",
            padding: "16px 40px 12px 40px",
            marginTop: "28px",
            border: "0px solid #E2E8F0",
        },
    };
};