import React from 'react';
import { Container, Grid, IconButton } from '@material-ui/core';
import TopHeader from '../components/homecards/TopHeader'
import Intro from '../components/homecards/Intro';
import Contact from '../components/homecards/Contact';
import './home.css'




function Home() {
  return (
    <div style={{backgroundColor: "#EBE5D7", height: "100vh"}}>
        <Container >
            <TopHeader/>
            <Grid container spacing={1}>
                <Grid item xs={12} md={8}>
                    <Intro/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Contact />
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}

export default Home;