import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from '../Filter';
import Button from '../Button';
import Weather from './Weather';
import Country from './Country';

const Part2cExer = () => {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');
    const [countryToShow, setCountryToShow] = useState({});
    const [capitalWeather, setCapitalWeather] = useState({});
    const api_key = process.env.REACT_APP_WEATHER_STACK_API_KEY;

    const countriesHook = () => {
        axios.get('https://restcountries.eu/rest/v2/all').then(response => {
            setCountries(response.data);
        });
    }

    const getWeather = (country) => {
        const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`;
        axios
            .get(url)
            .then(response => {
                setCapitalWeather(response.data);
            });
    }

    useEffect(countriesHook, []);

    const countriesToShow = filter
        ? countries.filter(country => {
            const regex = new RegExp(`(${filter})`, 'g');
            return regex.test(country.name.toLowerCase());
        })
        : countries;

    const handleShowClick = (country) => () => {
        getWeather(country);
        setCountryToShow(country);
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    return (
        <div>
        <Filter filter={filter} handleFilterChange={handleFilterChange}/>
        {countriesToShow.length <= 10 && countriesToShow.map(country =>
            <div key={country.name}>
                {country.name}
                <Button text="show" handleClick={handleShowClick(country)}/>
            </div>
        )}
        {countryToShow.name &&
            <Country country={countryToShow} />
        }
        {capitalWeather.location &&
            <Weather capital={countryToShow.capital} capitalWeather={capitalWeather} />
        }
    </div>);
}

export default Part2cExer;
