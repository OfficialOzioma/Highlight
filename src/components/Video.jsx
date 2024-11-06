import { Box } from '@chakra-ui/react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import { RiArrowGoBackFill } from 'react-icons/ri'
import { Button, Icon } from '@chakra-ui/react';

function Video() {
  let history = useNavigate();
  let data = useLocation();

  const video = data.state

  return (
    <Layout>
      {
        video.map((video, index) => {
          return <Box bg="whiteAlpha.900" borderRadius='lg' p={5} key={index} dangerouslySetInnerHTML={{ __html: video.embed }}></Box>
        })
      }
        <Button onClick={() => history(-1)} pos="fixed" bottom="0" right="0" m="3" colorScheme='purple'><Icon as={RiArrowGoBackFill} mr={2} />Back</Button>
    </Layout>
  )
}

export default Video