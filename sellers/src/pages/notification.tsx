import React from 'react';
import {Box , Text,Input,Flex, Spacer,Heading,Button,Divider} from '@chakra-ui/react';

function Notification() {
  return (
    <Box bg='white' width='1440px' height= '961px' borderRadius=' 20px 0px 0px 0px'>
      <Flex justify-content=' center' align-items= 'center' pl='38px' pt='61px' gap="680" minWidth='max-content'>
      <Input placeholder='Search' bg='white' width= '543px' h ='50px' variant='outline' />
        
        <Text color='black' as='b'> User</Text>
        <Text>there should be an image here idk how to put it</Text>
      </Flex>
      <Flex justify-content=' center' align-items= 'center' pl='38px' gap ='930'>
          <Heading color = 'black' fontSize='38px'>Notification</Heading>
          <Button width='88.366px' height= '48px' bg='#E9E9E9'  mt='40px' > <Text color ='black' as='b'>Clear All</Text></Button>
      </Flex>
      <Flex justify-content=' center' align-items= 'center' pl='38px' gap ='930'>
          <Text color='black' as='b'>Ikeoluwa Ali-Balogun has placed an order!</Text>
          <Text color='black'> 3ms ago</Text>
      </Flex>
      <Divider colorScheme='black' size='100px'/>
      <Flex justify-content=' center' align-items= 'center' pl='38px' gap ='930'>
      <Text color='black' as='b'>Ikeoluwa Ali-Balogun has placed an order!</Text>
          <Text color='black'> 20ms ago</Text>
      </Flex>
    </Box>
  );
}
export default Notification;
