// Review.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Review = ({ content, onMouseEnter, onMouseLeave }) => {
  return (
    <Box
      p={4}
      mr={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      backgroundColor="white"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.05)' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Text>{content}</Text>
    </Box>
  );
};

export default Review;
