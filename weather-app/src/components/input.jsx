import React from 'react'
import { useWeather } from '../../context/Weather'

const Input = () => {
  const weather = useWeather()

  return (
    <input
      placeholder="Search"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
      className="w-4/5 px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
    />
  )
}

export default Input
