import React from 'react'
import { useWeather } from '../../context/Weather'

const Input = () => {
  const weather = useWeather()

  return (
    <input
      placeholder="Search"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
      className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 ${className} text-neutral w-80"
    />
  )
}

export default Input
