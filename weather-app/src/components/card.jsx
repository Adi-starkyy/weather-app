import React from 'react'
import { useWeather } from '../../context/Weather'

const Card = () => {
  const weather = useWeather()

  const icon = weather?.data?.current?.condition?.icon
  const temperature = weather?.data?.current?.temp_c
  const location = weather?.data?.location?.name
  const country = weather?.data?.location?.region
  const condition = weather?.data?.current?.condition?.text

  console.log(condition);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-4 flex flex-col items-center gap-2">
      {icon && (
        <img 
          src={`https:${icon}`} 
          alt="weather icon" 
          className="w-16 h-16 drop-shadow-sm hover:scale-110 transition-transform"
        />
      )}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-amber-600">
          {temperature !== undefined ? `${temperature}°C` : '--'}
        </h2>
        <h5 className="text-sm font-medium text-gray-600 mt-1">
          {location || 'Unknown'}, {country || 'Unknown'}
        </h5>
        {condition && (
          <p className="text-sm text-amber-500 mt-1 font-medium">{condition}</p>
        )}
      </div>
    </div>
  )
}

export default Card
