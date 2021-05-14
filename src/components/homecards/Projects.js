import React from 'react';
import { Container,ListItem,ListItemAvatar,Avatar  } from '@material-ui/core';



function Projects() {
  return (
    <Container className="infoblock">
      <Container className="titles" style={{marginLeft:"-25px", marginBottom: "-15px"}}>
        <h2>Recent Projects</h2>
      </Container>
        <ListItem style={{marginBottom: "-25px", marginLeft: "-7px"}}>
            <ListItemAvatar>
            <Avatar src={'/images/housing.webp'}/>
            </ListItemAvatar>
            <Container className={"elist"} style={{marginLeft:"-25px"}}>
              <h4 style={{marginBottom:"-17px"}}><a href="/housing" style={{color:'black'}}>Housing Market Research Tool</a></h4>
              <p className="sub">Exlore and compare over 50,000 US housing market regions</p>
            </Container>
        </ListItem>
        <Container className="infotext">
          <p>Application built on FastApi, Nginx, MongoDB, Postgres and React. I created a batch job that collects, transforms, and formats Zillow housing market data once a month to power this app. The data visualizations are powered by Recharts.</p>
        </Container>
    </Container>
  );
}

export default Projects;