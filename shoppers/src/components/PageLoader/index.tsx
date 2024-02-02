import React from 'react';
import { Box, Spinner, Text} from '@chakra-ui/react';

const PageLoader: React.FC = () => {
    return (
        <Box display="flex" flexDir={"column"} justifyContent="center" alignItems="center" height="100vh">
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

export default PageLoader;
