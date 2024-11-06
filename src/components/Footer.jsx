import React from 'react'
import { Box, Text } from '@chakra-ui/react';
import { Link, } from '@chakra-ui/react';


const Footer = () => {

  return (
    <Box>
        {/* <Text mt="5" mb="5" p="5" borderRadius='lg' fontWeight="bold" textAlign="center" bg="white">&copy; 2024 <Link color="blue.500" href="https://dan-angelin.com">Angelin</Link> | For Testing Purposes Only</Text> */}
        <Text mt="5" mb="5" p="5" borderRadius='lg' fontWeight="bold" textAlign="center" bg="white">&copy; 2024 <Link color="blue.500" href="#">Football Replay</Link> | For Testing Purposes Only</Text>
    </Box>
  )
}

export default Footer