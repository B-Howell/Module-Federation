import React, { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div style={{ backgroundColor: '#b30000', width: drawerOpen ? '180px' : '50px', height: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: drawerOpen ? 'flex-start' : 'center', paddingLeft: drawerOpen ? '16px' : '0' }}>
        <IconButton edge="start" style={{ color: 'white' }} onClick={toggleDrawer(!drawerOpen)}>
          <MenuIcon />
        </IconButton>
        {drawerOpen && <Typography variant="subtitle1" style={{ color: 'white', marginLeft: '8px' }}>Sidebar</Typography>}
      </div>
    </div>
  );
}

export default Sidebar;
