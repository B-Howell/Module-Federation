import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position="static" sx={{backgroundColor: '#d9d9d9', color: '#000000'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sign In / Sign Up
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="container">
        {/* Your other content here */}
      </div>
    </div>
  );
}

export default App;
