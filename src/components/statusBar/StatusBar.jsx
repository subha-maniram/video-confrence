import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Participants from './Participants';
import ShowChat from './ShowChat'
import './statusbar.css';



const StatusBar = ({handleClickOpen,handleChat}) => {
  return (
    
    <>
  <AppBar position="static" style={{background: 'black'}} className="bar">
       <Container maxWidth="xl">
         <Toolbar disableGutters>
          <Participants handleClickOpen={handleClickOpen}/>
          <ShowChat handleChat ={handleChat}/>    

        </Toolbar>
       </Container>
  </AppBar>
    </>

    
  );
}



export default StatusBar

