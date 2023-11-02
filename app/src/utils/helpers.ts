import { CurrencyType, RaceType, RacesData } from "./type";

const currencyRate = 1.15;
const currency : CurrencyType = 'EUR';

const filterRaces = (races: RacesData[], selectedRaces:RaceType[])=>{
    return races.filter((race)=>{
        return selectedRaces.includes(race.race_type);
    });
}

const sort = (obj1: RacesData, obj2: RacesData) => {
    let amountObj2 = obj2.purse.amount
    let amountObj1 = obj1.purse.amount;
    if (obj1.purse.currency !== obj2.purse.currency) {
        if(obj1.purse.currency === currency) {
            amountObj2 = currencyRate * amountObj2;
        } else {
            amountObj1 = currencyRate * amountObj1;
        }
    }
    if (amountObj1 < amountObj2) {
        return 1;
    }
    if (amountObj1 > amountObj2) {
        return -1;
    }

    return 0;
}
const getTime = (postTime: number)=>{
    const date = new Date(postTime);
    return date.getMinutes();
}

const getFormatedNextRace = (race: RacesData)=>{
    return {
        ...race,
        post_time: getTime(race.post_time),
        distance: race.distance.toLocaleString(),
        purse: {
            amount: race.purse.amount.toLocaleString(),
            currency: race.purse.currency
        }
    }
}
export const getNextRace = (races: RacesData[], selectedRaces:RaceType[])=>{
    const newRaces =  filterRaces(races, selectedRaces);
    if (newRaces.length) {
        const sortedRaces = newRaces.sort(sort);
        const formatNextRace = getFormatedNextRace(sortedRaces[0]);
        return formatNextRace;
    } else {
        return null;
    }
}