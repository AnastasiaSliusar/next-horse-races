import React from 'react';
import { render, screen } from '@testing-library/react';
import NextRaceBlock from './NextRaceBlock';
import { RaceType } from '../utils/type';

const selectedRaces: RaceType[]=[ 'T', 'G', 'J'];

test(' should not render next race block because json is not loaded', () => {
  render(<NextRaceBlock selectedRaces={selectedRaces}/>);
  const nextRaceBlock = screen.queryByTestId('next-race-block');
  expect(nextRaceBlock).toEqual(null);
});