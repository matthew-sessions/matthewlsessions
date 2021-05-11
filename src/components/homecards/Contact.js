import React from 'react';
import { Container } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


function  Contact() {
  return (
    <Container className="infoblock">
        <ListItem style={{marginBottom:"-20px"}}>
          <ListItemIcon>
            <LocationOnIcon className="iconlist"/>
          </ListItemIcon>
          <p><b>Seattle, WA</b></p>
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <DraftsIcon className="iconlist"/>
          </ListItemIcon>
          <p><b>matthewlsessions@gmail.com</b></p>
        </ListItem>    
    </Container>
  );
}

export default Contact;