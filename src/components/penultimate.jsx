import React from 'react'
import {  Box, HStack,VStack, Text, Center, Button} from '@chakra-ui/react';

const penultimate = () => {
  return (
    <div>
       
       <Center m={'4'}>
        <VStack>
      <Box
        alignItems="center"
        w="fit-content"
        h="6%"
        backgroundColor="#F1F2F4"
        fontSize="14"
        p={2}
        textAlign="center"
        borderRadius={20}
        fontWeight="semibold"
      >
        Last call Baby! 🚀
      </Box>

       <Box>
        <Text fontFamily="Plus Jakarta Sans" fontSize={'3rem'} fontWeight={'900'} fontStyle={'bold'}>Ready to start?</Text>
       </Box>
       <Text
        
        color={'rgb(107, 107, 120)'}
        fontSize={'1.2rem'}
        lineHeight={'1.4'}
        w={'60%'}
      >
        Here is your last chance to explain how cool your app is. Focus on the benefits for your users, not on the features. 
      </Text>
      <Button
                  backgroundColor="black"
                  color={'white'}
                  mt={4}
                  p={'4'}
                  size="md"
                  fontSize={'0.9rem'}
                  w={'fit-content'}
                  borderRadius="10"
                  _hover={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    transform:'scale(1.2)'
                  }}
                >
                  Get Started ,Its free
                </Button>
                <HStack alignItems={'end'} p={'2'}>
      <Box
        w="4rem"  // Adjust the width of the image
        h="4rem"  // Adjust the height of the image
        borderRadius="50%"  // Use borderRadius to make the image circular, adjust as needed
        overflow="hidden"
      >
        <img
          src="https://framerusercontent.com/images/BRu6MhHhp9NjldqU9TTCEAEoGKg.png" // Replace with the actual path to your image
          alt="User Avatar"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
      <Box p={'4'}
      w="60%"  // Set the width as needed
      h="auto"  // Set the height as needed
      borderRadius="20px 20px 20px 0px"  // Border radius values for each corner
      backgroundColor="#FEE9CB"
    >   <Text color={'#2e2e2e'} fontFamily={'Plus Jakarta Sans'} >II never missed a call again, the AI-drivenfeature is a game changer for me! </Text>
        <Text fontFamily={'Plus Jakarta Sans'} color={'GrayText'}>Adam, Solo founder</Text>
      {/* Your content goes here */}
    </Box>
   
      </HStack>
        </VStack>
    </Center>
    </div>
  )
}

export default penultimate
