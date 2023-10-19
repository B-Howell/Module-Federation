import React, { lazy, Suspense } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './App.css';

const Login = lazy(() => import('LoginApp/Login'));

function App() {
  return (
    <div className="App">
      <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
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

export default App;
