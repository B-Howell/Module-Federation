import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import './App.css';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {/* Other items in Toolbar */}
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="row">
        <Sidebar /> {/* Positioned below AppBar, beside MainContent */}
        <Box flexGrow={1}>
          {/* Main Content */}
          <MainContent />
        </Box>
      </Box>
    </div>
  );
}

export default App;
