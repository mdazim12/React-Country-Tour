import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([])


    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = country => {
        console.log('Add to the visited contry')
        console.log(country)
        const newvisitedCountries = [...visitedCountries,country ];
        setVisitedCountries(newvisitedCountries)
    }

    const handleVisitedFlag = flag => {
        console.log('flag adding')
        const newVisitedFlag = [...visitedFlag, flag ];
        setVisitedFlag(newVisitedFlag)
    }



    return (
        <div>
            <h1>Hello Countries </h1>
            <h2>Total Country: {countries.length} </h2>
            <div>
                <h4>Visited Country: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>
                            {country.name.common}
                            </li>)
                    }
                </ul>
            </div>

            <div className="flag-container">
                {
                    visitedFlag.map(flag => <img src={flag}/>)
                }
            </div>
            

        <div className="Contries">
            {
                countries.map(country =><Country 
                    handleVisitedCountries = {handleVisitedCountries} 
                    key={country.cca3}
                    handleVisitedFlag = {handleVisitedFlag}
                    country ={country}></Country>)
            }
        </div>

        </div>
    );
};

export default Countries;