import './Country.css'

const Country = ({ country }) => {
    console.log(country)
    const { name ,flags,population,area,cca3 } = country;
    return (
        <div className="country">
            <h3>Country Name: {name?.common || 'Unknown'}</h3>
            <img src={flags.png} alt="" />
            <h4>Population : {population}</h4>
            <h4>Area : {area}</h4>
            <h4>Area : {cca3}</h4>
        </div>
    );
};

export default Country;
