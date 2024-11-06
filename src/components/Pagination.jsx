import { Flex, Button,Link } from '@chakra-ui/react';
import React from 'react';

const Pagination = ({highlightsPerPage, totalHighlights, paginate, currentPage}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalHighlights / highlightsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex justifyContent="center" mt="5" gap="4" color="white" flexWrap="wrap">
        {pageNumbers.map((number, index) => {
            return <Link onClick={() => 
            paginate(number)} key={index}>
              {number === currentPage ? <Button colorScheme='blue'>
                        {number}
                      </Button> 
                      :
                      <Button colorScheme='green' variant='outline'>
                        {number}
                      </Button>}
                  </Link>
        })}
    </Flex>
  )
}

export default Pagination;