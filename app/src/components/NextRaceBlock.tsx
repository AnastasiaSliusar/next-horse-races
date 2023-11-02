import React, { useEffect, useMemo, useState } from "react";
import { NextRaceBlockProp, RacesData } from "../utils/type";
import Runner from "./Runner";
import { getNextRace } from "../utils/helpers";
import { images } from "../assets";

const NextRaceBlock = ( { selectedRaces }: NextRaceBlockProp ) => {
    const [races, setCards] = useState<RacesData[]>([]);

    useEffect(() => {
        if (!races.length) {
        fetch('http://localhost:3001/data')
          .then(resp => resp.json())
          .then(data => {
            setCards(data.races);
          }).catch((error: Error)=>{
            console.error(`APP: ${error.message}`);
          })
        }
      }, [races]);

    let nextRace = useMemo(()=>{
        if (races.length && selectedRaces.length) {
            return getNextRace(races, selectedRaces);
        }
      }, [races, selectedRaces])

    let runnerslist =  nextRace && nextRace?.runners.map((runner)=>{
        return <div key={runner.id_runner} style={{
            borderBottom: '0.063rem solid #666'
        }}>
        <Runner id_runner={runner.id_runner} name={runner.name} odds={runner.odds} silk={runner.silk}/>
        </div>
    });

let nextRaceBlock = nextRace ? <a data-testid="next-race-block" href={`http://www.racebets.com/bet/${nextRace.id_race}`} target="_blank" rel="noreferrer" style={ {
        display: 'block',
        color: '#fff',
        width: '14.875rem',
        height: '12.438rem',
        backgroundColor: '#000',
        borderRadius: '0.188rem',
        fontSize: 11,
        textDecoration: 'none'
    }}>
       <div style={{ padding: '0.5rem 0.5rem 0.5rem 0.5rem' }}>
            <div style={{
                verticalAlign: 'middle',
                width: 'inherit',
                position: 'relative'
            }}>
                <span style={{ marginRight: '0.25rem'}}>
                    {nextRace.event.country}
                </span>
                <span style={{ fontWeight: 700}}>{nextRace.event.title}</span>
                <span style={{ position:'absolute', right: 0, fontWeight: 700}}>{nextRace.post_time} min</span>
                <hr style={{
                    margin: '0.5rem 0 0 0',
                    color: '#666',
                    width: '13.875rem',
                }}/>
            </div>
            <div style={{
                    verticalAlign: 'middle',
                    width: 'inherit',
                    position: 'relative',
                    marginTop: '0.25rem'
                }}>
                    <span style={{ marginRight: '0.25rem'}}>{nextRace.num_runners} runners</span>
                    <span style={{ marginRight: '0.25rem'}}>| {nextRace.distance} m</span>
                    <span style={{ marginRight: '0.25rem'}}>| {`${nextRace.purse.amount} ${nextRace.purse.currency}`} </span>
                    <span style={{  position:'absolute', right: 0}}><img src={images[`race${nextRace.race_type}_white`]}/></span>

            </div>
        </div>

        <div style={{
            display: 'block',
            backgroundColor: '#fff',
            color: '#000',
            margin: '0.25rem 0.5rem 0.5rem 0.5rem',
            width: '13.875rem',
            position: 'relative'
        }}>
            {runnerslist}
        </div>
   
    </a> : null;
    return <>{nextRaceBlock}</>
}
export default NextRaceBlock;
