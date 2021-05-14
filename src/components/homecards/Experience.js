import React from 'react';
import { Container,ListItem,ListItemAvatar,Avatar  } from '@material-ui/core';


function Experience() {
  return (
    <Container className="infoblock">
      <Container className="titles">
        <h2>Experience</h2>
      </Container>
        <ListItem style={{marginBottom: "-25px"}}>
            <ListItemAvatar>
            <Avatar src={'/images/expedia.jpeg'}/>
            </ListItemAvatar>
            <Container className={"elist"} style={{marginLeft:"-25px"}}>
              <h4 style={{marginBottom:"-17px"}}>Expedia - Software Dev Engineer</h4>
              <h5>July 2020 - Present</h5>
            </Container>
        </ListItem>
        <Container>
          <ul className="infotext">
            <li>Work on the Virtual Agent Platform to help Expedia automate various aspects of the customer service pipeline</li>
            <li>Engineer Data Pipelines that support user inquiries for various booking platforms</li>
            <li>Use Kafka to manage event streams for real-time reporting</li>
          </ul>
        </Container>
        <ListItem style={{marginBottom: "-25px"}}>
            <ListItemAvatar>
            <Avatar src={'/images/tronsmart.png'}/>
            </ListItemAvatar>
            <Container className={"elist"} style={{marginLeft:"-25px"}}>
              <h4 style={{marginBottom:"-17px"}}>Tronsmart - Brand Analyst</h4>
              <h5>January 2018 - August 2019</h5>
            </Container>
        </ListItem>
        <Container>
          <ul className="infotext">
            <li>Studied demographic data (using Python) to determine optimal target audiences, competitor offerings and tactics for persuasion</li>
            <li>Developed scalable marketing systems to turn offline retail traffic into digital leads</li>
            <li>Created a Facebook Messenger marketing strategy that decreased cost per lead by 65%</li>
          </ul>
        </Container>
        <ListItem style={{marginBottom: "-25px"}}>
            <ListItemAvatar>
            <Avatar src={'/images/geekbuying.png'}/>
            </ListItemAvatar>
            <Container className={"elist"} style={{marginLeft:"-25px"}}>
              <h4 style={{marginBottom:"-17px"}}>Geekbuying - Digital Marketing Specialist</h4>
              <h5>January 2018 - August 2019</h5>
            </Container>
        </ListItem>
        <Container>
          <ul className="infotext">
            <li>Built web crawlers that provide insight into our competitor's pricing strategies and product placement</li>
            <li>Created custom competitor reports that drive decisions of product managers, sourcing managers, and the marketing team</li>
            <li>Managed all Facebook marketing campaigns (Buying & Planning)</li>
          </ul>
        </Container>
    </Container>
  );
}

export default Experience;