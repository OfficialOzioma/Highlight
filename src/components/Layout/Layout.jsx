import { Flex } from '@chakra-ui/react';
import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';

const Layout = (props) => {
  return (
    <Flex direction="column" m="0 auto" maxW={{ xl: "1200px" }}>
        <Nav />
        {props.children}
        <Footer />
    </Flex>
  )
}

export default Layout