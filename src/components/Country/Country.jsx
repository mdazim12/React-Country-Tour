import { useState } from 'react';
import './Country.css'

const Country = ({ country ,handleVisitedCountries }) => {
    // console.log(country)
    const { name ,flags,population,area,cca3 } = country;

    const [Visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!Visited);
    }

    console.log(handleVisitedCountries);
    
    return (
        <div className={`country ${Visited && 'visited'}`}>
            <h3>Country Name: {name?.common || 'Unknown'}</h3>
            <img src={flags.png} alt="" />
            <h4>Population : {population}</h4>
            <h4>Area : {area}</h4>
            <h4>Area : {cca3}</h4>
            {Visited ? 'I have Visited this Country' : 'I want to go there'}
            <button onClick={handleVisited}> {Visited ? 'Visited' : 'Going'} </button> 
            <br />
            <button>Mark Visited</button>
        </div>
    );
};

export default Country;
