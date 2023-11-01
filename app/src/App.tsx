import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { FilterData, RaceType, RacesData } from './utils/type';
import Filter from './components/Filter';
import NextRaceBlock from './components/NextRaceBlock';

function App() {
  const [selectedRaces, setSelectedRaces] = useState<RaceType[]>(['T', 'G', 'J']);

  let handleRaceFilter = (filterData: FilterData) =>{
    let newselectedRaces: RaceType[] = [];
    if(!filterData.checked) {
      newselectedRaces = selectedRaces.filter((raceType)=>{
        return raceType !== filterData.id
      });
    } else {
      if(!selectedRaces.includes(filterData.id)) {
        newselectedRaces = [...selectedRaces, filterData.id];
      }
    }
    setSelectedRaces(newselectedRaces);
  }

return <div>
  <Filter selectedRaces={selectedRaces} handleRaceFilter={handleRaceFilter}/>
  <NextRaceBlock selectedRaces={selectedRaces}/>
  </div>
}

export default App;
