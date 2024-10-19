import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);


    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = country => {
        console.log('Add to the visited contry')
        console.log(country)
    }



    return (
        <div>
            <h1>Hello Countries </h1>
            <h2>Total Country: {countries.length} </h2>
            <div>
                <h4>Visited Country</h4>
                <ul>

                </ul>
            </div>
            

        <div className="Contries">
            {
                countries.map(country =><Country handleVisitedCountries = {handleVisitedCountries} key={country.cca3}  country ={country}></Country>)
            }
        </div>

        </div>
    );
};

export default Countries;