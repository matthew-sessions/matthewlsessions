import React from 'react';
import { Container,ListItem,ListItemAvatar,Avatar  } from '@material-ui/core';



function Education() {
  return (
    <Container className="infoblock">
      <Container className="titles" style={{marginLeft:"-25px", marginBottom: "-15px"}}>
        <h2>Education</h2>
      </Container>
        <ListItem style={{marginBottom: "-25px", marginLeft: "-7px"}}>
            <ListItemAvatar>
            <Avatar src={'/images/lambda.jpeg'}/>
            </ListItemAvatar>
            <Container className={"elist"} style={{marginLeft:"-25px"}}>
              <h4 style={{marginBottom:"-17px"}}>Lambda School - Data Science</h4>
              <h5>Aug 2019 - May 2020</h5>
            </Container>
        </ListItem>
        <Container className="infotext">
          <p>Intensive training in Linear Algebra, Statistics, Natural Language Processing, Machine Learning, Data Engineering, and Cloud Computing.</p>
        </Container>
        <ListItem style={{marginBottom: "-25px", marginLeft: "-7px"}}>
            <ListItemAvatar>
            <Avatar src={'/images/blcu.png'}/>
            </ListItemAvatar>
            <Container className={"elist"} style={{marginLeft:"-25px"}}>
              <h4 style={{marginBottom:"-17px"}}>Beijing Language University - Business Chinese</h4>
              <h5>Aug 2016 - Dec 2017</h5>
            </Container>
        </ListItem>
        <Container className="infotext">
          <p>Passed the CSC exam (The official Chinese Government Language exam for foreigners) and passed HSK 5 (Chinese proficiency exam with six levels).</p>
        </Container>
    </Container>
  );
}

export default Education;