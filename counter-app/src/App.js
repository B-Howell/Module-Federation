import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="Counter">
      <AppBar position="static" sx={{ backgroundColor: '#950750' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Counter
          </Typography>
        </Toolbar>
      </AppBar>

      <Typography variant="h1">{count}</Typography>
      <Button variant="contained" color="primary" onClick={incrementCounter}>
        Increment
      </Button>
      <Button variant="contained" color="secondary" onClick={resetCounter}>
        Reset
      </Button>
    </div>
  );
}

export default App;
