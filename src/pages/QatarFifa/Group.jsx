import React from 'react'
import { Grid, Box, chakra, Flex, Image, Text } from '@chakra-ui/react'

const Group = ({groups}) => {

    const GroupCard = chakra(Box, {
        baseStyle: {
            bg: "#56042C",
            borderRadius: "6px",
            padding: "24px",
            display: "flex",
            textAlign: "center"
        }
    })
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(15rem, 1fr))" gap="5" justifyContent="center">
      {
        Object.entries(groups).map((group, index) => {
          return  <GroupCard key={index} border="2px" borderColor="#1077C3">
                    <Flex flexDirection='column'>
                    <Text color="#49BCE3" fontSize='2xl'>Group {group[0]}</Text>
                    {group[1].teams.map((team, index) => {
                      return  <Flex alignItems="center" gap="10px" key={index}>
                                  <Image
                                    borderRadius="50%"
                                    boxSize='50px'
                                    objectFit='contain'
                                    src={team.flag}
                                    alt={team.name}
                                  />
                                  <Text color="#FEC310">{team.name}</Text>
                              </Flex>
                    })}
                      </Flex>
                  </GroupCard>
        })
      }

    </Grid>
  )
}

export default Group;