import React, { lazy, Suspense } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './App.css';

const Login = lazy(() => import('LoginApp/Login'));
const Counter = lazy(() => import('CounterApp/Counter'));

function MainContent({ selectedMicrofrontend }) {
  return (
    <div className="MainContent">
      <AppBar position="static" sx={{ backgroundColor: '#6F2232' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Main Content
          </Typography>
        </Toolbar>
      </AppBar>
      <Suspense fallback={<div>Loading...</div>}>
        {selectedMicrofrontend === 'Login' ? <Login /> : 
        selectedMicrofrontend === 'Counter' ? <Counter /> :
        <div>Please sign in to proceed.</div>}
      </Suspense>
      <div className="container">
        {/* Your other content here */}
      </div>
    </div>
  );
}

export default MainContent;
