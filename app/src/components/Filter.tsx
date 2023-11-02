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
                color: 'black',
                display: 'inline-block',
                marginLeft: '0.625rem'
            }
        }>
            <input type="checkbox" id={raceType.id} checked={checked} value={raceType.id} name={raceType.id} onChange={onChange}/>
            <label htmlFor={raceType.id}><img src={images[`race${raceType.id}${!checked ? '_disabled' : ''}`]} alt={raceType.name} style={{ marginLeft: '0.188rem'}}/>
        </label>
    </div>
});
return <section data-testid="filter">
    {RaceFilter}
    </section>;
}
export default Filter;