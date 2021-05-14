import React from 'react';
import { Container, Grid, IconButton } from '@material-ui/core';
import TopHeader from '../components/homecards/TopHeader'
import Intro from '../components/homecards/Intro';
import Contact from '../components/homecards/Contact';
import Experience from '../components/homecards/Experience';
import Skills from '../components/homecards/Skills';
import Languages from '../components/homecards/Languages';
import Education from '../components/homecards/Education';
import Projects from '../components/homecards/Projects';
import './home.css'




function Home() {
  return (
    <div style={{backgroundColor: "#EBE5D7", height: "100%"}}>
        <Container >
            <TopHeader/>
            <Grid container spacing={1}>
                <Grid item xs={12} md={8}>
                    <Intro/>
                    <Projects/>
                    <Experience/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Contact />
                    <Skills/>
                    <Languages/>
                    <Education/>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}

export default Home;