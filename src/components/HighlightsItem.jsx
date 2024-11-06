import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Box, Text, Grid, Flex, chakra } from '@chakra-ui/react';
import DefaultThumbnail from "../assets/default-thumbnail.jpg";


const HighlightsItem = function({highlights, loading}) {
    if (loading) {
        return <h2>Loading...</h2>
    }

    const WhiteCard = chakra(Box, {
        baseStyle: {
            bg: "white",
            borderRadius: "6px",
            padding: "10px",
            display: "flex",
            textAlign: "center",
            boxShadow: "xl"
        }
    })

    return <Grid templateColumns="repeat(auto-fit, minmax(15rem, 1fr))" gap={2} justifyContent="center" m={1}>
        {
            highlights.map((highlight, index) => {
                return <WhiteCard key={index}>
                <Link to={`/video/${highlight.videos[0].id}`} state={highlight.videos} >
                    <Flex flexDirection="column" justifyContent="space-between" gap="10px">
                        <Image mb="3" borderRadius="6px"  src={highlight.thumbnail} 
                                        onError={(e) => {
                                                                    e.target.onerror = null;
                                                                    e.target.src = DefaultThumbnail;
                                                                    }} 
                                        alt='Match Highlight' 
                        />
                        <Text fontSize="md" fontWeight="700">⚽ { highlight.title } </Text>
                        <Text fontSize="15px" fontWeight="400"> { highlight.competition }</Text>
                        <Text>📅 { highlight.date.slice(0, 10) } </Text>
                    </Flex>
                </Link>
                </WhiteCard>
            })
        }
            </Grid>;
}



export default HighlightsItem;