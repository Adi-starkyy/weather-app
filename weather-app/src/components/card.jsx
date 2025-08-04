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
    <div className="w-full max-h-50 bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center space-y-1 overflow-hidden">
      {icon && (
        <img 
          src={`https:${icon}`} 
          alt="weather icon" 
          className="w-16 h-16 object-contain drop-shadow-sm"
        />
      )}
      <h2 className="text-3xl font-bold text-gray-800 tracking-wide">
        {temperature !== undefined ? `${temperature}°C` : '--'}
      </h2>
      <h5 className="text-md font-medium text-gray-500">{location || 'Unknown'}, {country || 'Unknown'}</h5>
      {condition ? ( <p className="text-sm text-amber-600 italic">{condition}</p> ) : (<p>"No valid"</p>) }
    </div>
  )
}

export default Card
