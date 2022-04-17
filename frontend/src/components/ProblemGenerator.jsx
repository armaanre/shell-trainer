import React, { useState } from 'react';
import {
  Typography, Button,
} from '@mui/material';

export default function ProblemGenerator() {
  const [easyCount, setEasyCount] = useState(0);
  const [mediumCount, setMediumCount] = useState(0);
  const [hardCount, setHardCount] = useState(0);
  const [question, setQuestion] = useState('');

  const problems = {
    easy: [
      'List out files in current directory',
      'List all running processes',
    ],
    medium: [
      'Find all lines in a file that contains the word "Optus"',
      'Print out the operating system',
    ],
    hard: [
      'List all processes running on port 8080',
      'Use sed i guess',
    ],
  };

  // eslint-disable-next-line no-unused-vars
  const getProblem = (difficulty, count) => problems[difficulty][count];
  return (
    <>
      <Button onClick={() => {
        const newCount = (easyCount + 1) % problems.easy.length;
        setEasyCount(newCount);
        const newProblem = getProblem('easy', newCount);
        setQuestion(newProblem);
      }}
      >
        Easy

      </Button>

      <Button onClick={() => {
        const newCount = (mediumCount + 1) % problems.medium.length;
        setMediumCount(newCount);
        const newProblem = getProblem('medium', newCount);
        setQuestion(newProblem);
      }}
      >
        Medium

      </Button>

      <Button onClick={() => {
        const newCount = (hardCount + 1) % problems.hard.length;
        setHardCount(newCount);
        const newProblem = getProblem('hard', newCount);
        setQuestion(newProblem);
      }}
      >
        Hard

      </Button>
      <Typography variant="h2" component="div" gutterBottom>
        {question}
      </Typography>
    </>
  );
}
