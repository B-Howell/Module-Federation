import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import './App.css';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

function App() {
  const [selectedMicrofrontend, setSelectedMicrofrontend] = useState('None');  // Moved inside the function

  return (
    <div className="App">
      <AppBar position="static" sx={{ backgroundColor: '#1A1A1D' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {/* Other items in Toolbar */}
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="row">
        <Sidebar setSelectedMicrofrontend={setSelectedMicrofrontend} />
        <Box flexGrow={1}>
          <MainContent selectedMicrofrontend={selectedMicrofrontend}/>
        </Box>
      </Box>
    </div>
  );
}

export default App;
