import React, { useState } from 'react';
import { IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import PlusOneIcon from '@mui/icons-material/PlusOne';

// Accept setSelectedMicrofrontend as a prop
function Sidebar({ setSelectedMicrofrontend }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLoginClick = () => {
    setSelectedMicrofrontend('Login');  // Now this should work
  };

  const handleCounterClick = () => {
    setSelectedMicrofrontend('Counter');  // Now this should work
  };

  return (
    <div style={{ backgroundColor: '#b30000', width: drawerOpen ? '200px' : '50px', height: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: drawerOpen ? 'flex-start' : 'center', paddingLeft: drawerOpen ? '16px' : '0' }}>
        <IconButton edge="start" style={{ color: 'white' }} onClick={toggleDrawer(!drawerOpen)}>
          <MenuIcon />
        </IconButton>
        {drawerOpen && <Typography variant="subtitle1" style={{ color: 'white', marginLeft: '8px' }}>Sidebar</Typography>}
      </div>
      <Button onClick={handleLoginClick} style={{ display: 'flex', alignItems: 'center', justifyContent: drawerOpen ? 'flex-start' : 'center', color: 'white', paddingLeft: drawerOpen ? '16px' : '0' }}>
        <LoginIcon />
        {drawerOpen && <Typography variant="subtitle1" style={{ color: 'white', marginLeft: '8px' }}>Sign in / Sign up</Typography>}
      </Button>
      <Button onClick={handleCounterClick} style={{ display: 'flex', alignItems: 'center', justifyContent: drawerOpen ? 'flex-start' : 'center', color: 'white', paddingLeft: drawerOpen ? '16px' : '0' }}>
        <PlusOneIcon />
        {drawerOpen && <Typography variant="subtitle1" style={{ color: 'white', marginLeft: '8px' }}>Counter</Typography>}
      </Button>
    </div>
  );
}

export default Sidebar;
