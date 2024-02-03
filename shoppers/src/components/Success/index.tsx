import React, { useState, useEffect } from 'react';
import { Alert } from '@chakra-ui/react';

const SuccessMessage = ({ message }: { message: string }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <Alert status="success" variant="solid">
          {message}
        </Alert>
      )}
    </>
  );
};

export default SuccessMessage;
