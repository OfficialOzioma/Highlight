import React from 'react'
import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Text } from '@chakra-ui/react'
import Group from './Group'
import qatar from './groups'

const PageGroups = () => {
    const [groups] = useState(qatar);

  return (
    <Layout>
            <Text fontSize='3xl' color="#56042C" textAlign="center">World Cup Qatar 2022: Groups</Text>
            <Group groups={groups}/>
    </Layout>
  )
}

export default PageGroups