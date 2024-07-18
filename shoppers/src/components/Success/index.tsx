import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';

interface SuccessMessageProps {
    status: string;
    title: string;
    message: string;


}
const SuccessMessage: React.FC<SuccessMessageProps> = ({status, title, message}) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Alert
            status={status as "info" | "warning" | "success" | "error" | "loading" | undefined}
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='100vh'
            colorScheme='blue'
        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                {title}
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                {message}
            </AlertDescription>
        </Alert>
    );
};

export default SuccessMessage;
