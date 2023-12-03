import { Box, Flex, Img, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const data=[
    {
      "id": 1,
      "title": "Cross-Device Sync",
      "titlebg": "#f1f2f4",
      "text": "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
      "imgurl": "https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg"
    },
    {
      "id": 2,
      "title": "Auto Event Import",
      "titlebg": "rgb(254, 233, 203)",
      "text": "Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.",
      "imgurl": "https://framerusercontent.com/images/9zLLT2PHM1pdm0cmjDvqVV6u4.svg"
    },
    {
      "id": 3,
      "title": "Task Delegation",
      "titlebg": "rgb(204, 234, 253)",
      "text": "Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.",
      "imgurl": "https://framerusercontent.com/images/MnBPtp8lNOwne9QGiLZLBCkZK9k.svg"
    },
    {
        "id": 4,
        "title": "Voice Command Integration",
        "titlebg": "rgb(221, 244, 228)",
        "text": "Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants.",
        "imgurl": "https://framerusercontent.com/images/VFrv8s9Ou5YYTsx7jkOfyXmAm2Y.png?scale-down-to=512",
    },
     {
        "id": 5,
        "title": "Customizable Alerts",
        "titlebg": "rgb(253, 222, 214)",
        "text": "Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed.",
        "imgurl": "https://framerusercontent.com/images/l2ZsBz5u7WqpiyCOQ4jeJmYCYIc.png?scale-down-to=512"
     },
     {
        "id": 6,
        "title": "Privacy Protection",
        "titlebg": "rgb(195, 156, 246)",
        "text": "Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection.",
        "imgurl": "https://framerusercontent.com/images/RGak3EPkyg9scIKkezsY8Rn7E.png?scale-down-to=512"
     }
     
  ]
  
const cards = () => {
  return (
    <>
      <Box>
        <Flex width={'100%'} justifyContent={'center'} h={'auto'} mb={10}>
          <Flex width={'80%'} justifyContent={'flex-start'} flexDirection={'row'} flexWrap={'wrap'}>
            {data.map((item) => (
              <VStack w={'30%'} h={'50vh'} align={'flex-start'} id={item.id} p={4} m={4} key={item.id} mb={'10'}>
                <Box w="100%" h="100%" bg="#F1F2F4" borderRadius="10px" overflow="hidden" position="relative">
                  <Img
                    src={item.imgurl}
                    alt="Custom Image"
                    style={{
                      width: '80%',
                      height: '80%',
                      objectFit: 'contain',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </Box>
                <Box
                  w="auto"
                  h="auto"
                  backgroundColor={item.titlebg}
                  fontSize={'14'}
                  p={2}
                  textAlign="center"
                  borderRadius={20}
                  fontWeight="semibold"
                >
                  {item.title}
                </Box>
                <Text color={'rgb(107, 107, 120)'} fontSize={'1rem'} lineHeight={'1.3'} fontWeight={'600'}>
                  {item.text}
                </Text>
              </VStack>
            ))}
          </Flex>
        </Flex>
      </Box>

      
    </>
  );
}

export default cards
