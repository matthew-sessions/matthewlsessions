import React from 'react';
import { Container, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';


function Languages() {
  return (
    <Container className="infoblock">
      <Container className="titles" style={{marginLeft:"-25px", marginBottom: "-18px"}}>
        <h2>{"Foreign Languages"}</h2>
      </Container>
      <Box className="language" component="fieldset" mb={3} borderColor="transparent" marginBottom="-25px">
        <p style={{marginBottom: "1px"}}>Malay (Fluent)</p>
        <Rating name="disabled" value={4} style={{color: "#21618C"}} disabled />
      </Box>
      <Box className="language" component="fieldset" mb={3} borderColor="transparent" marginBottom="-25px">
        <p style={{marginBottom: "1px"}}>Mandarin (中文) (Proficient)</p>
        <Rating name="disabled"  value={3} style={{color: "#21618C"}} disabled />
      </Box>
      <Box className="language" component="fieldset" mb={3}  borderColor="transparent" marginBottom="-12px" style={{marginBottom:"10px"}}>
        <p style={{marginBottom: "1px"}}>Indonesian (Proficient)</p>
        <Rating name="disabled" value={3} style={{color: "#21618C"}} disabled />
      </Box>
    </Container>
  );
}

export default Languages;