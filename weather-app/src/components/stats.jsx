import React from 'react'
import { useWeather } from '../../context/Weather'
import { Wind } from 'lucide-react';
import { Waves } from 'lucide-react';

const stats = () => {

    const weather = useWeather();

    const windSpeed = weather?.data?.current?.wind_kph;
    const airQuality = weather?.data?.current?.air_quality?.['gb-defra-index'];

  return (
    <div className="stats shadow mt-10">
        <div className="stat place-items-center">
            <div className="stat-title text-neutral flex flex-row items-center gap-2">Wind Speed<Wind /></div>
            <div className="stat-value text-neutral ">{windSpeed}(kph)</div>
        </div>

        <div className="stat place-items-center">
            <div className="stat-title text-neutral flex flex-row items-center gap-2">Air Quality<Waves /></div>
            {/*<div className="stat-value text-neutral">{airQuality}</div>*/}
            {airQuality >= 1 && airQuality <= 3 ? (<div className="stat-value text-success-content">{airQuality}</div>):
              airQuality >= 4 && airQuality <= 6 ? (<div className="stat-value text-warning">{airQuality}</div>):
              airQuality >= 7 && airQuality <= 9 ? (<div className="stat-value text-error">{airQuality}</div>):
              airQuality === 10 ? (<div className="stat-value text-error-content">{airQuality}</div>):
              ("--")
            }
        </div>
    </div>
  )
}

export default stats