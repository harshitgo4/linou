import React, { useState } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center,VStack,Text} from '@chakra-ui/react';
import { HiMinus, HiPlus } from 'react-icons/hi';
const data = [
    {
      id: 1,
      title: 'Can I cancel my subscription?',
      content: 'You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.',
    },
    {
      id: 2,
      title: 'What happens when my trial ends?',
      content: 'When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.',
    },
    {
      id: 3,
      title: 'What payment methods do you offer?',
      content: 'We aim to provide a seamless experience for our customers. We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express, and Discover), PayPal, and bank transfers.',
    },
    {
      id: 4,
      title: 'What is your refund policy?',
      content: 'Our refund policy is designed with customer satisfaction in mind. If you are not satisfied with our service, you can request a full refund within 30 days of your initial purchase. To initiate the refund process, please contact our support team through the "Help" section in your account or email us at support@Milton.com, and we\'ll be happy to assist you.',
    },
    {
      id: 5,
      title: 'Do you offer discounts to educational institutions?',
      content: 'Yes, we are happy to support educational institutions by offering special discounts on our SaaS platform. Please reach out to our sales team at sales@Milton.com with your institution\'s details, and we will provide you with more information on our exclusive educational pricing options.',
    },
   
  ];
  
  const CustomAccordion = () => {
    const [accordionState, setAccordionState] = useState(data.map(() => false));
  
    const toggleAccordion = (index) => {
      setAccordionState((prev) => {
        const newState = [...prev];
        newState[index] = !newState[index];
        return newState;
      });
    };
  
    return (
        <>
        
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
        Relevant stuff, bla bla 📣
      </Box>

       <Box>
        <Text fontFamily="Plus Jakarta Sans" fontSize={'3rem'}> Frequently asked questions</Text>
       </Box>
        </VStack>
    </Center>
      
      <Center w="100%" h="70vh">
        <Box width="70%">
          <Accordion allowToggle borderRadius="12px" >
            {data.map((item, index) => (
              <AccordionItem key={item.id} m={'4'} backgroundColor="rgb(241, 242, 244)" borderRadius={'10'}>
                <h2>
                  <AccordionButton onClick={() => toggleAccordion(index)}>
                    <Box as="span" flex="1" textAlign="left" fontFamily="Plus Jakarta Sans">
                      {item.title}
                    </Box>
                    <AccordionIcon as={accordionState[index] ? HiMinus : HiPlus} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    color="rgba(107, 107, 120, 1)"
                    fontSize="16px"
                    lineHeight="24px"
                    fontFamily="Plus Jakarta Sans"
                    marginBottom="1rem" // Adjust the margin-bottom value as needed
                  >
                    {item.content}
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Center>
      
      </>
    );
  };

export default CustomAccordion;
