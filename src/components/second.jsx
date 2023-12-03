import { Box, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import img1 from '../images/king.webp'
const second = () => {
  return (
    <div id='features'>
        <Flex justifyContent={'center'} alignItems={'center'} h={'100vh'} w={'100%'}>
        <Box
      width="80%"
      height="auto"
      bg="gray.200" // Set background color or remove this line if you want a transparent box
      borderRadius="md" // Optional: Add border radius for rounded corners
      overflow="hidden" // Optional: Hide any overflowing content
    >
      <Img
        src={img1} // Replace with the URL or path of your image
        alt={"stats"}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Box>
        </Flex>

    </div>
  )
}

export default second
