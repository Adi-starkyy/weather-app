import {  createContext, useContext, useState  } from 'react'
import { getWeatherData } from '../src/api/index.js'

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
    }

    return (
        <WeatherContext.Provider value={{ searchCity, data, setSearchCity, fetchData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}