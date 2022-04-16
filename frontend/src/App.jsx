import React from 'react';
import './App.css';
import axios from 'axios';
import { Container, Typography, Button } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const checkHealthz = async () => {
  return await axios.get('/healthz');
};

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" component="div" gutterBottom>
          Shell Trainer
        </Typography>
        <Container maxWidth="sm">
          <Typography variant="h2" component="div" gutterBottom>
            Solve shell problems
          </Typography>
        </Container>
        <Button variant="outlined" onClick={checkHealthz}>
          Check backend healthy
        </Button>
      </header>
    </div>
  );
}
