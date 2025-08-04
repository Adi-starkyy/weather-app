import {  createContext, useContext, useState  } from 'react'
import { getWeatherData, getCurrentLocation } from '../src/api/index.js'

const WeatherContext =  createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async () => {
        const res = await getWeatherData(searchCity);
        setData(res);
    };

    const fetchCurrentLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getCurrentLocation(position.coords.latitude, position.coords.longitude)
            .then((data) => setData(data));
        })
    }

    return (
        <WeatherContext.Provider value={{ searchCity, data, setSearchCity, fetchData, fetchCurrentLocationData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}