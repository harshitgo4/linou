// ReviewsContainer.js
import React from 'react';
import { Box, Center, Img, Text, VStack, HStack ,useBreakpointValue} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import '../styles/reviews.css';

const reviewsData = [
  {
    icon: 'https://framerusercontent.com/images/6uYgdEC1jGe6urbMtA9d0dgg.png',
    title: 'recommend',
    rating: 5,
    text:
      "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
    name: 'Sophie Devilan',
    designation: 'Entrepreneur',
  },
  {
    icon: 'https://framerusercontent.com/images/6uYgdEC1jGe6urbMtA9d0dgg.png',
    title: 'Just love it',
    rating: 4,
    text: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
    name: 'Adam Moore',
    designation: 'Entrepreneur',
  },
  {
    icon: 'https://framerusercontent.com/images/6uYgdEC1jGe6urbMtA9d0dgg.png',
    title: 'The best',
    rating: 5,
    text: "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
    name: 'Brad de Costa',
    designation: 'Head of marketing',
  },
  {
    icon: 'https://framerusercontent.com/images/6uYgdEC1jGe6urbMtA9d0dgg.png',
    title: 'The best',
    rating: 5,
    text: "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
    name: 'Brad de Costa',
    designation: 'Head of marketing',
  }
  // Add more reviews as needed
];
const ReviewCard = ({ review }) => {
    const { icon, title, rating, text, name, designation } = review;
  
    return (
      <motion.div
        className="review-box review-movement" // Apply the styles
        whileHover={{ x: 0 }} // Stop animation on hover
        style={{ margin: '20px', padding: '10px', maxWidth: '300px' }} // Add maxWidth
      >
        <VStack align="start">
          <HStack w={'100%'}>
            <Box>
              <Img src={icon} alt={`${name}'s Avatar`} h={'3rem'} w={'3rem'} borderRadius="full" />
            </Box>
            <Box>
              <Text fontWeight={'bold'} fontSize={'1rem'} fontFamily={'plus jakarta sans'}>
                {title}
              </Text>
            </Box>
            <Box justifyContent={'flex-end'}>
              {[...Array(rating)].map((_, index) => (
                <Box key={index} as={'span'} fontSize={20}>
                  ⭐
                </Box>
              ))}
            </Box>
          </HStack>
          <Box w={'100%'}>
            <Text color={'#6b6b78'} fontSize={['sm']}>
              {text}
            </Text>
          </Box>
          <HStack w={'100%'} justifyContent="space-between">
            <Text alignSelf={'flex-start'}>{name}</Text>
            <Text alignSelf={'flex-end'}>{designation}</Text>
          </HStack>
        </VStack>
      </motion.div>
    );
  };
  
  const ReviewPage = () => {
    const reviewsBatch = reviewsData.slice(0, 3); // Display only 3 reviews at a time
    const isMobile = useBreakpointValue({ base: true, md: false });
  
    return (
      <Center>
        
        <HStack
          spacing={4}
          align="center"
          className="review-container"
          overflowX={isMobile ? 'auto' : 'hidden'} // Enable horizontal scrolling on mobile
        >
          {reviewsBatch.map((review, index) => (
            <ReviewCard key={index} review={review} />
            
          ))}
        </HStack>
      </Center>
    );
  };
  
  export default ReviewPage;