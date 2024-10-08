import 'regenerator-runtime/runtime'
import React from 'react'
import { useEffect, useState } from 'react'

const WeatherDisplay = ({ query, setQuery, showDisplay }) => {
    const [name, setName] = useState(null);
    const [temp, setTemp] = useState(null);
    const [description, setDescription] = useState(null);
    const [iconUrl, setIconUrl] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=e25ef0305805dbc7a7b11a7f7f67a2ef`);
            const json = await data.json();

            setName(json.name);
            setTemp(parseInt((json.main.temp - 273.15) * (9 / 5) + 32));
            setDescription(json.weather[0].description);
            setIconUrl(`http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);

            setQuery("");
        }

        fetchData();
    }, [showDisplay]);

    return (
        name && (
            <>
                <h2>{name}</h2>
                <h1>{temp}℉</h1>
                <h4>{description}</h4>
                <img src={iconUrl} />
            </>
        )
    )
}

export default WeatherDisplay