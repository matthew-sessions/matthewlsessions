import React from 'react';
import { Container, Box,Typography } from '@material-ui/core';


function Skills() {
  return (
    <Container className="infoblock">
      <Container className="titles" style={{marginLeft:"-25px", marginBottom: "1px"}}>
        <h2>{"Skills & Frameworks"}</h2>
      </Container>
        <Box
          display="flex"
          flexWrap="wrap"
          p={1}
          m={1}
          style={{marginLeft:"-10px", marginRight: "-10px"}}

        >
          <Box className="skills">
            <Typography variant="p" >Django</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Flask</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >FastApi</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Faust</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Python OOP</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >AWS</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Dev Ops</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Docker</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Kafka</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Redis</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Data Analysis</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Looker</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Snowflake</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >SQL/NoSQL</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Data Visualization</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Sklearn</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Spacy NLP</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Tensorflow</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >React</Typography>
          </Box>
          <Box className="skills">
            <Typography variant="p" >Nginx</Typography>
          </Box>
        </Box>
    </Container>
  );
}

export default Skills;