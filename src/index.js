import React from 'react';
import ReactDOM from "react-dom/client";
import { HMSRoomProvider } from '@100mslive/react-sdk';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router> 
        
        <HMSRoomProvider>
            <App />
        </HMSRoomProvider>

    </Router>


     </React.StrictMode>
);
