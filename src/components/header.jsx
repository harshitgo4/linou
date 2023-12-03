import React from 'react';
import { Box, Button, HStack, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <Box
      bgColor="white"
      color="black"
      p={4}
      mb={4}
      fontFamily="Roboto, sans-serif"
      borderBottom="2px solid black"
    >
      <HStack justify="space-around" align="center">
        <ScrollLink
          to="home" // Specify the target element's ID
          smooth={true}
          duration={500} // Animation duration in milliseconds
        >
          <ChakraLink fontWeight="bold" fontFamily={'plus jakarta sans'}>
            Milton
          </ChakraLink>
        </ScrollLink>
        <HStack spacing={8}>
          <ScrollLink
            to="features" // Specify the target element's ID
            smooth={true}
            duration={500} // Animation duration in milliseconds
          >
            <ChakraLink
              color="gray.500"
              fontWeight="semibold"
              _hover={{ color: 'black' }}
            >
              Features
            </ChakraLink>
          </ScrollLink>
          {/* Apply the ScrollLink component to other links as well */}
          <ScrollLink to="testimonial" smooth={true} duration={500}>
            <ChakraLink
              as={Link}
              to="/testimonial"
              color="gray.500"
              fontWeight="semibold"
              _hover={{ color: 'black' }}
            >
              Testimonial
            </ChakraLink>
          </ScrollLink>
          <ScrollLink to="pricing" smooth={true} duration={500}>
            <ChakraLink
              as={Link}
              to="/pricing"
              color="gray.500"
              fontWeight="semibold"
              _hover={{ color: 'black' }}
            >
              Pricing
            </ChakraLink>
          </ScrollLink>
          <ScrollLink to="faqs" smooth={true} duration={500}>
            <ChakraLink
              as={Link}
              to="/faqs"
              color="gray.500"
              fontWeight="semibold"
              _hover={{ color: 'black' }}
            >
              FAQs
            </ChakraLink>
          </ScrollLink>
          <ScrollLink to="blog" smooth={true} duration={500}>
            <ChakraLink
              as={Link}
              to="/blog"
              color="gray.500"
              fontWeight="semibold"
              _hover={{ color: 'black' }}
            >
              Blog
            </ChakraLink>
          </ScrollLink>
        </HStack>
        <HStack spacing={4}>
          <Button
            as={Link}
            to="/login"
            variant="outline"
            bgColor="gray.100"
            color="black"
            _hover={{ transform: 'scale(1.2)' }}
          >
            Log In
          </Button>
          <Button
            as={Link}
            to="/get-started"
            bgColor={'black'}
            color={'white'}
            _hover={{ transform: 'scale(1.2)' }}
          >
            Get Started
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
