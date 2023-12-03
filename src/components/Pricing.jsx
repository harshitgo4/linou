import React, { useState } from 'react';
import { Box, Center, Text, VStack, Button, HStack, Icon } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

const CustomSwitch = ({ isAnnually, setToMonthly, setToAnnually }) => {
  return (
    <Center>
      <Box
        mt={'10'}
        className="custom-switch"
        backgroundColor="rgb(243,243,243)"
        color="black"
        borderRadius="8.33% / 34.2857%"
        boxShadow="0px 0.602187px 0.602187px -1.25px rgba(0, 0, 0, 0.18), 0px 2.28853px 2.28853px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.063)"
        height="40px"
        width="180px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="2px"
        style={{ cursor: 'pointer', transition: 'background-color 0.3s, color 0.3s' }}
      >
        <Text
          marginLeft="8px"
          onClick={setToMonthly}
          backgroundColor={!isAnnually ? 'grey' : 'white'}
          transition="background-color 0.3s"
          p={'2'}
          pl={'6'}
          pr={'6'}
          borderRadius={'20'}
        >
          Monthly
        </Text>
        <Box
          className="switch-knob"
          backgroundColor="transparent"
          borderRadius="50%"
          height="36px"
          width="80px"
          transition="transform 0.3s ease-in-out"
          transform={isAnnually ? 'translateX(80px)' : 'translateX(0)'}
        />
        <Text
          marginRight="8px"
          p={'2'}
          borderRadius={'20'}
          onClick={setToAnnually}
          backgroundColor={isAnnually ? 'grey' : 'white'}
          transition="background-color 0.3s"
          pl={'6'}
          pr={'6'}
        >
          Annually
        </Text>
      </Box>
    </Center>
  );
};

const PricingCard = ({ planName, price, isAnnually, features,color }) => {
  return (
    <Box w={'70%'} h={'100vh'} m={'4'}>
      <Center>
        <Box w="100%" h="100vh">
          <Center>
            <Box maxW="90%" borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} boxShadow="lg" h={'80vh'}>
              <Box
                w="fit-content"
                h="6%"
                backgroundColor={color}
                fontSize="14"
                p={2}
                textAlign="center"
                borderRadius={20}
                fontWeight="semibold"
                mb={4}
              >
                {planName}
              </Box>
              <Text fontSize="md" color="gray.500" mt={2}>
                So you can see how incredible our tool is.
              </Text>
              <HStack alignItems={'baseline'}>
                <Text fontSize="5xl" fontWeight="bold" mt={4}>
                  {price}
                </Text>
                <Text ml={'-1'} fontSize={'2sm'}>
                  /mo
                </Text>
              </HStack>

              <Text fontSize="lg" color="gray.500">
                {isAnnually ? 'Billed annually' : 'Billed monthly'}
              </Text>
              <Center>
                <Button
                  backgroundColor="black"
                  color={'white'}
                  mt={4}
                  size="lg"
                  w={'80%'}
                  borderRadius="5"
                  _hover={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    transform:'scale(1.2)'
                  }}
                >
                  Get Started
                </Button>
              </Center>
              <Center>
                <Text fontSize="sm" color="gray.500" mt={2}>
                  { 'Includes 7 days free trial No credit card needed'}
                </Text>
              </Center>

              <VStack align="start" mt={4} spacing={2}>
                <Text fontSize="lg" fontWeight="bold">
                  What's included:
                </Text>
                {features.map((feature, index) => (
                  <HStack key={index}>
                    <Icon as={FaCheck} color="#c39cf6" />
                    <Text>{feature}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

const Pricing = () => {
  const [isAnnually, setIsAnnually] = useState(false);

  const setToMonthly = () => {
    setIsAnnually(false);
  };

  const setToAnnually = () => {
    setIsAnnually(true);
  };

  const freeFeatures = ['A cool feature', 'A basic feature', 'A top feature with limitations', 'An incredible feature so useful', 'A cool feature'];
  const starterFeatures = [...freeFeatures, 'Another top feature'];

  const proFeatures = [...starterFeatures, 'A premium feature', 'You need this feature'];

  return (
    <div>
      <Center>
        <VStack>
          <Box
            alignItems="center"
            w="fit-content"
            h="6%"
            backgroundColor="#F1F2F4"
            fontSize="14"
            p={2}
            textAlign="center"
            borderRadius={20}
            fontWeight="semibold"
          >
            Pricing and plans 💰
          </Box>

          <Box>
            <Text fontFamily="Plus Jakarta Sans" fontSize={'3rem'} fontWeight={'800'}>
              Find the best plan for your needs
            </Text>
          </Box>
        </VStack>
      </Center>

      <CustomSwitch isAnnually={isAnnually} setToMonthly={setToMonthly} setToAnnually={setToAnnually} />

      <HStack>
        <PricingCard planName="Free" price="$0" isAnnually={isAnnually} features={freeFeatures} color={'#F2f2f4'}/>
        <PricingCard planName="Starter" price={isAnnually ? '$15' : '$19'} isAnnually={isAnnually} features={starterFeatures} color={'#FEE9CB'}/>
        <PricingCard planName="Pro" price={isAnnually ? '$45' : '$49'} isAnnually={isAnnually} features={proFeatures} color={'#FDDED6'} />
      </HStack>
    </div>
  );
};

export default Pricing;
