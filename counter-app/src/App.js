import React, { useState } from 'react';
import { Button, Typography, Container } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <Container>
      <Typography variant="h1">{count}</Typography>
      <Button variant="contained" color="primary" onClick={incrementCounter}>
        Increment
      </Button>
      <Button variant="contained" color="secondary" onClick={resetCounter}>
        Reset
      </Button>
    </Container>
  );
}

export default App;
