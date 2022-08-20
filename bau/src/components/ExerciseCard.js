import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <div className='exercise-details' >
      <h3>{exercise.name}</h3>
      <h4>{exercise.bodyPart}</h4>
      <h4>{exercise.target}</h4>
    </div>
  </Link>
);












export default ExerciseCard;
