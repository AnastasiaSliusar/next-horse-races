import React from 'react';
import { render, screen } from '@testing-library/react';
import { RaceType } from '../utils/type';
import Filter from './Filter';

const selectedRaces: RaceType[]=['T', 'G', 'J'];

const handleRaceFilter = ()=>{}; 
test(' should render filter component', () => {
  render(<Filter selectedRaces={selectedRaces} handleRaceFilter={handleRaceFilter}/>);
  const filter = screen.getByTestId('filter');
  expect(filter).toBeInTheDocument();
});