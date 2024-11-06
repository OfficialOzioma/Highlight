import React from 'react';
import HighlightsList from "../components/HighlightsList";
import Layout from '../components/Layout/Layout';
import Pagination from '../components/Pagination';
import { Grid } from '@chakra-ui/react';

function Home() {


    return (
        <Layout>
          <Grid >
            <HighlightsList />
          </Grid>
          <Pagination />
      </Layout>
    )
}

export default Home;
