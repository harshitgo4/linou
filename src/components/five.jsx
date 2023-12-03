import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import img3 from '../images/img3.webp'
const Five = () => {
  return (
    <div>
      <Flex
      justifyContent="center"   // Center horizontally
      alignItems="center"       // Center vertically
      h="80vh"
      w={'100%'}
      p={4}
      mt={20}                // Set full height of the viewport
    >
     
        <HStack w={'80%'}  justifyContent={'flex-start'}>
            <VStack w={'50%'} alignItems={'flex-start'} justifyContent={'flex-start'}>
            <Box 
          w="auto"
          h="6%"
          backgroundColor=" #ddf4e4"
          fontSize={'14'}
          p={2}               // Add padding from the top
          textAlign="center"
          borderRadius={20}   // Set border radius
          fontWeight="bold"   // Make text bold
        >
          Seamless Scheduling
        </Box>
        <Text fontWeight="bold" letterSpacing={'-1'} fontSize={'2.5rem'}>Focus on what matters most for you</Text>
        <Text
        
        color={'rgb(107, 107, 120)'}
        fontSize={'1.2rem'}
        lineHeight={'1.4'}
      >
        Effortlessly plan your day with our intuitive drag-and-drop interface. Sync
        with multiple calendar platforms, import events from emails, and add
        participants with just a few clicks.
      </Text>
      <HStack alignItems={'end'} p={'2'}>
      <Box
        w="4rem"  // Adjust the width of the image
        h="4rem"  // Adjust the height of the image
        borderRadius="50%"  // Use borderRadius to make the image circular, adjust as needed
        overflow="hidden"
      >
        <img
          src="https://framerusercontent.com/images/1OwzdZHx9ElDw1ZAavs6WGWBSw.png" // Replace with the actual path to your image
          alt="User Avatar"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
      <Box p={'4'}
      w="65%"  // Set the width as needed
      h="auto"  // Set the height as needed
      borderRadius="20px 20px 20px 0px"  // Border radius values for each corner
      backgroundColor="rgb(46, 46, 46)"
    >   <Text color={'whitesmoke'} fontFamily={'Plus Jakarta Sans'}>I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need.</Text>
        <Text fontFamily={'Plus Jakarta Sans'} color={'GrayText'}>Annie, Designer </Text>
      {/* Your content goes here */}
    </Box>
   
      </HStack>

            </VStack>
         <Box
        w="50%"  // Adjust the width of the image
        h="50%"  // Adjust the height of the image
        borderRadius="50%"  // Use borderRadius to make the image circular, adjust as needed
        overflow="hidden"
      >
        <img
          src={img3} // Replace with the actual path to your image
          alt="User Avatar"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
        </HStack>
        </Flex>
    </div>
  )
}

export default Five;
