import React from 'react'

const Weather = ({capital, capitalWeather}) => {
    return (
        <div>
            <h2>Weather in {capital}</h2>
            <b>temperature:</b> {capitalWeather.current.temperature} Celsius
            <div>
                <img src={capitalWeather.current.weather_icons[0]} alt={`${capital} weather`} width="100" height="100"></img>
            </div>
            <b>wind:</b> {capitalWeather.current.wind_speed} mph direction {capitalWeather.current.wind_dir}
        </div>
    );
}

export default Weather;
