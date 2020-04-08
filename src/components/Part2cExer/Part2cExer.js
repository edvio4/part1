import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../Filter';


const Part2cExer = () => {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');

    const hook = () => {
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
              setCountries(response.data);
        });
    }

    useEffect(hook, []);

    const countriesToShow =  filter
        ? countries.filter(country => {
                const regex = new RegExp(`(${filter})`, 'g');
                return regex.test(country.name.toLowerCase());
            })
        : countries;

    if (countriesToShow.length <=10 && countriesToShow.length > 1) {
        return (
            <div>
                <Filter filter={filter} setFilter={setFilter} />
                {countriesToShow.map(country =>
                    <div key={country.name}>
                    {country.name}
                    </div>
                )}
            </div>
        );
    }

    if (countriesToShow.length === 1) {
        return (
            <div>
                <Filter filter={filter} setFilter={setFilter} />
                <h1>{countriesToShow[0].name}</h1>
                <div>capital {countriesToShow[0].capital}</div>
                <ul>
                    {countriesToShow[0].languages.map(language =>
                        <li>{language.name}</li>
                    )}
                </ul>
                <img src={countriesToShow[0].flag} width="200" height="200"></img>
            </div>
        );
    }

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
        </div>
    );
}

export default Part2cExer;
