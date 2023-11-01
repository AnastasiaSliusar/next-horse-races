export type RaceType = 'T' | 'G' | 'D' | 'J';
export type CurrencyType = 'GBP' | 'EUR';
export type RaceTypeName = 'Trop' | 'Gallop' | 'Dogs'| 'Jumping';

export type RacesData = {
    id_race: number;
    event: RaceEvent;
    race_type: RaceType;
    post_time: number;
    num_runners: number;
    distance: number;
    purse: PurseType;
    runners: RunnerData[];
}

export type RunnerData = {
    id_runner: number;
    name: string;
    odds: number;
    silk?: string;
}

type RaceEvent = {
    title: string;
    country: string;
}

type PurseType = {
    amount: number;
    currency: CurrencyType;
}

export type FilterData = {
    id: RaceType;
    checked: boolean
}

export type FilterProps = {
    selectedRaces: RaceType[];
    handleRaceFilter: ( obj: FilterData )=>void;
}

export type RaceListItem = {
        id: RaceType;
        name: RaceTypeName;
        active: boolean;
}

export type NextRaceBlockProp = {
    selectedRaces: RaceType[]
}