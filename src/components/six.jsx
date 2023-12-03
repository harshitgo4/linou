import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import img6 from '../images/image6.png'
const Six = () => {
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
        <Box
        w="50%"  // Adjust the width of the image
        h="50%"  // Adjust the height of the image
        borderRadius="50%"  // Use borderRadius to make the image circular, adjust as needed
        overflow="hidden"
      >
        <img
          src={img6} // Replace with the actual path to your image
          alt="User Avatar"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
            <VStack w={'50%'} alignItems={'flex-start'} justifyContent={'flex-start'}>
            <Box 
          w="auto"
          h="6%"
          backgroundColor="#cceafd"
          fontSize={'14'}
          p={2}               // Add padding from the top
          textAlign="center"
          borderRadius={20}   // Set border radius
          fontWeight="bold"   // Make text bold
        >
          Smart Reminders & Task
        </Box>
        <Text fontWeight="bold" letterSpacing={'-1'} fontSize={'2.5rem'}>Never miss an important deadline or event again</Text>
        <Text
        
        color={'rgb(107, 107, 120)'}
        fontSize={'1.2rem'}
        lineHeight={'1.4'}
      >
       Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.
      </Text>
      <HStack alignItems={'end'} p={'2'}>
     
      <Box p={'2'}
      w="65%"  // Set the width as needed
      h="auto"  // Set the height as needed
      borderRadius="20px 20px 0px 20px"  // Border radius values for each corner
      backgroundColor="rgb(46, 46, 46)"
    >   <Text color={'whitesmoke'} fontFamily={'Plus Jakarta Sans'}> I've recommended this app to all my friends and colleagues! </Text>
        <Text fontFamily={'Plus Jakarta Sans'} color={'GrayText'}>Karl, CTO of a cool startup </Text>
      {/* Your content goes here */}
    </Box>
    <Box
        w="4rem"  // Adjust the width of the image
        h="4rem"  // Adjust the height of the image
        borderRadius="50%"  // Use borderRadius to make the image circular, adjust as needed
        overflow="hidden"
      >
        <img
          src="https://framerusercontent.com/images/lKaaStgbmdIe8TfrIkFlKzHazV0.png" // Replace with the actual path to your image
          alt="User Avatar"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
      </HStack>

            </VStack>
         
        </HStack>
        </Flex>
    </div>
  )
}

export default Six;
