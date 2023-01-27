import React, { useState } from 'react';
import { useHMSStore, selectLocalPeer, selectRemotePeers } from '@100mslive/react-sdk';


import './meeting.css';
import Peer from '../peer/Peer';
import LocalPeer from '../peer/LocalPeer';
import StatusBar from '../statusBar/StatusBar';

// material ui components

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';
import Message from '../Chat';




const MeetingRoom = () => {
  const peers = useHMSStore(selectRemotePeers);
  const localpeer = useHMSStore(selectLocalPeer);

  const { onClose } = 'props';

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const [showResults, setShowResults] = useState(false)
  const handleChat = () => {
    console.log("iasdfds");
    if (!(showResults)) {
      setShowResults(true)
    }
    else {
      setShowResults(false)
    }
  }

  return (
    <>
      <div className="screen" >

        
<div className='container-fluid'>
  <div className='row'>
    <div className='col-md-8 col-lg-8 '>
    <LocalPeer localpeer={localpeer} />

    </div>
    <div className='col-md-4 col-lg-4'>
      <div className='d-flex flex-wrap'>
    {peers.map((peer) => (
                  <Peer key={peer.id} peer={peer} />
                ))}

{showResults ? (<div className="message">
          <Message />
        </div>)
          : null}
</div>

    </div>
  </div>
</div>
 
        <div>
          <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{peers.length} Participants In This Meeting With You</DialogTitle>
            <List sx={{ pt: 0 }}>
              {peers.map((peer) => (
                <ListItem button onClick={() => handleListItemClick(peer)} key={peer.id}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={peer.name} />
                </ListItem>
              ))}
            </List>
          </Dialog>

        </div>
        <div className='mt-3'>
        <StatusBar handleClickOpen={handleClickOpen}  
          handleChat={handleChat} 
        />
        </div>
      </div>

    </>
  );
}


export default MeetingRoom;

