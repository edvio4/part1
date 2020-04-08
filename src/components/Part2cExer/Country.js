import React from 'react'

const Country = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <div>capital {country.capital}</div>
            <h2>Spoken languages</h2>
            <ul>
                {country.languages.map(language =>
                    <li key={`${country.name}-${language}`}>{language.name}</li>
                )}
            </ul>
            <img src={country.flag} alt={`${country.name} flag`} width="200" height="200"></img>
        </div>
    );
}

export default Country;
