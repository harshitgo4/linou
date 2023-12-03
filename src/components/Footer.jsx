import React from 'react';
import { HStack, VStack, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <HStack
      as="footer"
      justify="space-around"
      align="center"
      p="4"
      bg="gray.200"
      borderTop="1px"
      borderColor="gray.300"
      w="100%"
      h={'50vh'}
    >
      <VStack align="start"w={'20%'}>
        {/* Updated the first line */}
        <Text fontSize="lg" fontWeight="bold" mb="4" >
          Milton
        </Text>
        <Text fontSize="sm" color="rgb(107, 107, 120)">
          A short text explaining why my startup is so cool
        </Text>
        <Text fontSize="sm" color="rgb(107, 107, 120)">
        © My super start-up
        </Text>
      </VStack>

      {/* Updated the VStack styles */}
      <VStack fontSize="sm" color="rgb(107, 107, 120)">
        <Text fontWeight="bold" color={'black'} fontSize={'1.2rem'}>Products</Text>
        <Link href="#">Features</Link>
        <Link href="#">Testimonials</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">FAQs</Link>
      </VStack>

      {/* Updated the VStack styles */}
      <VStack fontSize="sm" color="rgb(107, 107, 120)">
        <Text fontWeight="bold" color={'black'} fontSize={'1.2rem'}>Resources</Text>
        <Link href="#">Change log</Link>
        <Link href="#">Help center</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Contact</Link>
      </VStack>

      {/* Updated the VStack styles */}
      <VStack fontSize="sm" color="rgb(107, 107, 120)">
      <Text fontWeight="bold" color={'black'} fontSize={'1.2rem'}>Others</Text>
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
        <Link href="#">Affiliation</Link>
        <Link href="#">Press</Link>
      </VStack>

      {/* Updated the VStack styles */}
      <VStack fontSize="sm" color="rgb(107, 107, 120)">
        <Text fontWeight="bold" color={'black'} fontSize={'1.2rem'}>From The Blog</Text>
        <Link href="#">Mastering Your Schedule</Link>
        <Link href="#">Organizing Your Calendar</Link>
        <Link href="#">The Power of Prioritization</Link>
        <Link href="#">Maximizing Your Minutes</Link>
      </VStack>
    </HStack>
  );
};

export default Footer;
