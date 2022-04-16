import React from 'react';
import './App.css';
import axios from 'axios';
import {
  Container, Typography, Button, TextareaAutosize,
} from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const checkHealthz = async () => axios.get('/healthz');

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

        <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder="Maximum 4 rows"
          defaultValue="Here we will solve some problems"
          style={{ width: 1000, height: 1000, backgroundColor: 'beige' }}
        />

        <Container maxWidth="sm">
          <Button variant="outlined" onClick={checkHealthz}>
            Check backend healthy
          </Button>
        </Container>

      </header>
    </div>
  );
}
