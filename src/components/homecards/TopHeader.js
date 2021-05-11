import React from 'react';
import { Container, Grid, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
let iconStyles = {
    fontSize: '35px',
    color: '#21618C',
    hover: 'white',
    
  };
function TopHeader() {
  return (
    <Container style={{paddingTop:"50px"}}>
    <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
            <Grid container spacing={0}>
                <Grid item xs={3} md={3} style={{textAlign:"right", marginTop:'clamp(.75rem, -0.575rem + 10.333vw, .75rem)'}}>
                    <img src="/images/me.jpeg" style={{height:'clamp(5rem, -0.575rem + 11.333vw, 8rem)', borderRadius: "50%", marginRight:".5rem"}}></img>
                </Grid>
            <Grid item xs={9} md={9} >
                <h1 className="headings" style={{fontSize:'clamp(2.2rem, -0.575rem + 6.333vw, 3.2rem)', marginTop: "10px"}}>Matthew L Sessions</h1>
                <p className="subtitles" style={{fontSize:'clamp(1rem, -0.975rem + 6.333vw, 2rem)', marginTop:'clamp(-2rem, -0.775rem + -6.333vw, -3rem)'}}>Software Dev Engineer (Data)</p>
            </Grid>
        </Grid>                 
        </Grid>
        <Grid item xs={12} md={4}>
            <Container alignItems="center">
            <Grid container direction="row" justify = "center">
                <IconButton href="https://github.com/matthew-sessions"><GitHubIcon className="socialicon" style={iconStyles}/></IconButton>
                <IconButton href="https://www.linkedin.com/in/matthew-sessions/"><LinkedInIcon className="socialicon" style={iconStyles}/></IconButton>
                <IconButton href="https://www.facebook.com/matthewlsessions"><FacebookIcon className="socialicon" style={iconStyles}/></IconButton>
                <IconButton href="https://www.youtube.com/channel/UC2voQJqWIxa24tMSpLpj91Q"><YouTubeIcon className="socialicon" style={iconStyles}/></IconButton>
            </Grid>   
            </Container>

        </Grid>
    </Grid>
</Container>
  );
}

export default TopHeader;