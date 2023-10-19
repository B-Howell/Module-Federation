import React, { lazy, Suspense } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './App.css';

const Login = lazy(() => import('LoginApp/Login'));

function MainContent() { // Changed the function name to MainContent
  return (
    <div className="MainContent">
      <AppBar position="static" sx={{ backgroundColor: '#404040' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Main Content
          </Typography>
        </Toolbar>
      </AppBar>
      <Suspense fallback={<div>Loading Sign in / Sign up...</div>}>
        <Login />
      </Suspense>
      <div className="container">
        {/* Your other content here */}
      </div>
    </div>
  );
}

export default MainContent;
