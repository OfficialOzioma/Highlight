import React, { useState, useEffect } from 'react';
import HighlightsItem from "./HighlightsItem";
import Pagination from './Pagination';
import { Box } from '@chakra-ui/react';
import useAPISoccer from './hooks/useAPISoccer';

function HighlightsList() {

  const [currentPage, setCurrentPage] = useState(1);
  const [highlightsPerPage] = useState(8);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const { highlights, loading } = useAPISoccer();

const indexOfLastHighlight = currentPage * highlightsPerPage;
const indexOfFirstHighlight = indexOfLastHighlight - highlightsPerPage;
const currentHighlights = highlights.slice(indexOfFirstHighlight, indexOfLastHighlight);

const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
            <Box>
                <HighlightsItem highlights={currentHighlights} loading={loading} />
                <Pagination currentPage={currentPage} highlightsPerPage={highlightsPerPage} totalHighlights={highlights.length} paginate={paginate}/>
            </Box>
    )
  }

export default HighlightsList