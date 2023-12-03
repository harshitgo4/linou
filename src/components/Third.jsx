import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import img2 from '../images/image2.webp'
const Third = () => {
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
          Our main features 🦸🏼
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
         Discover your new superpowers
        </Box>
        <HStack w={'80%'}  justifyContent={'flex-start'}>
            <VStack w={'50%'} alignItems={'flex-start'} justifyContent={'flex-start'}>
            <Box 
          w="auto"
          h="6%"
          backgroundColor="rgba(254, 233, 203, 1)"
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
          src="https://framerusercontent.com/images/Pm9TTOkN341IYtePLdPGmhG0E.png" // Replace with the actual path to your image
          alt="User Avatar"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
      <Box p={'4'}
      w="65%"  // Set the width as needed
      h="auto"  // Set the height as needed
      borderRadius="20px 20px 20px 0px"  // Border radius values for each corner
      backgroundColor="rgb(46, 46, 46)"
    >   <Text color={'whitesmoke'} fontFamily={'Plus Jakarta Sans'}>I tested many calendar apps. This app is the best of all! It saves me hours of time.</Text>
        <Text fontFamily={'Plus Jakarta Sans'} color={'GrayText'}>Carla, Head of Finance </Text>
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
          src={img2} // Replace with the actual path to your image
          alt="User Avatar"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
        </HStack>
        </VStack>
        </Flex>
    </div>
  )
}

export default Third;
