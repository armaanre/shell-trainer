import React from 'react';
import './App.css';
import axios from 'axios';
import {
  Container, Typography, Button, Divider,
} from '@mui/material';

// Note passing middleware as the third argument requires redux@>=3.1.0
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const checkHealthz = async () => {
  console.info('Running get request to /healthz');
  const res = await axios.get('/healthz');
  console.info(res);
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
        <Divider />
        <Button variant="outlined" onClick={checkHealthz}>
          Check backend healthy
        </Button>
      </header>
    </div>
  );
}
