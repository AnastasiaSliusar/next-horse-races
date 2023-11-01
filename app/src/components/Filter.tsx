import React from "react";
import { FilterProps, RaceType } from "../utils/type";
import raceTypeArr from "../utils/raceType";
import { images } from "../assets";

const Filter = ( { selectedRaces, handleRaceFilter } : FilterProps ) => {

let onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    let filterData = {
        id: event.target.value as RaceType,
        checked:  event.target.checked    
    }
    handleRaceFilter(filterData);
}

let RaceFilter = raceTypeArr.map((raceType) => {
    let checked = selectedRaces.includes(raceType.id) ? true : false;
        return <div key={raceType.id} style={
            {
                pointerEvents: !raceType.active ? 'none' : 'all',
                color: !raceType.active ? 'grey' : 'black',
                display: 'inline-block',
                marginLeft: '0.625rem'
            }
        }>
            <input type="checkbox" id={raceType.id} checked={checked} value={raceType.id} name={raceType.id} disabled={!raceType.active} onChange={onChange}/>
            <label htmlFor={raceType.id}><img src={`/assets/race-types/race-type-${raceType.id}.svg`} alt={raceType.name} style={{ marginLeft: '0.188rem'}}/>
        </label>
    </div>
});
return <section>
    {RaceFilter}
    </section>;
}
export default Filter;