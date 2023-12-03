import { Box, Flex, VStack } from '@chakra-ui/react';
import React from 'react'

const Third = () => {
  return (
    <div id='testimonial'>
      <Flex
      justifyContent="center"   // Center horizontally
      alignItems="center"       // Center vertically
      h="20vh"
      w={'100%'}
      p={4}
      mt={20}                // Set full height of the viewport
    >
      <VStack spacing={2} w={'100%'}>
        <Box
          w="auto"
          h="6%"
          backgroundColor="#F1F2F4"
          fontSize={'14'}
          p={2}               // Add padding from the top
          textAlign="center"
          borderRadius={20}   // Set border radius
          fontWeight="semibold"   // Make text bold
        >
         They already love our products 😍🦸🏼
        </Box>
        <Box
          w="auto"
          h="6%"
          fontFamily={'Plus Jakarta Sans'}
          fontSize={'3rem'}
          // Add padding from the top
          textAlign="center"
          fontWeight="bold"   // Make text bold
        >
         See what our users say about us
        </Box>
        
        </VStack>
        </Flex>
    </div>
  )
}

export default Third;
