import React from 'react';
import { Flex, Box, VStack, Button, Text, HStack, Icon } from '@chakra-ui/react';
import AvatarCollage from './avatarcollage';
import { StarIcon } from "@chakra-ui/icons";

const First = () => {
  return (
    <Flex
      justifyContent="center"
      h="100vh"
      p={4}
    >
      <VStack spacing={2} align="center">
        <Box
          w="auto"
          h="6%"
          backgroundColor="#F1F2F4"
          fontSize="14"
          p={2}
          textAlign="center"
          borderRadius={20}
          fontWeight="semibold"
        >
          Another way to manage time️
        </Box>
        <Box
          w="60%"
          h="auto"
          fontFamily="Plus Jakarta Sans"
          fontSize="5rem"
          textAlign="center"
          fontWeight="bold"
        >
          Your new favorite calendar 🗓️ app
        </Box>
        <Box
          w="45%"
          h="auto"
          fontSize="20"
          p={3}
          textAlign="center"
          fontWeight="semibold"
          color="rgb(107, 107, 120)"
        >
          Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features.
        </Box>
        <Button
          w="20%"
          backgroundColor="black"
          p={6}
          borderRadius={10}
          fontSize="20"
          fontFamily="Plus Jakarta Sans"
          color={'white'}
          _hover={{ transform: 'scale(1.2)' }}
        >
          Get Started, it's free
        </Button>
        <Text fontSize="sm" color="gray.600">
          Free 14 days trial, no credit card needed
        </Text>
        <HStack>
          <AvatarCollage />
          <VStack align="center">
            <HStack spacing="1">
              {[1, 2, 3, 4, 5].map((index) => (
                <Icon as={StarIcon} key={index} color="yellow.300" boxSize={5} />
              ))}
              <Text fontWeight="bold">5.0</Text>
            </HStack>
            <Text>From 200+ happy users</Text>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default First;
