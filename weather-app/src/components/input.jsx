import React from 'react'
import { useWeather } from '../../context/Weather'
import { MapPin } from 'lucide-react'

const Input = () => {
  const weather = useWeather()

  return (
    <div className="relative">
      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" size={16} />
      <input
        placeholder="Enter city name..."
        value={weather.searchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)}
        className="pl-10 pr-4 py-2 w-64 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white/80 backdrop-blur-sm text-sm text-black placeholder:text-amber-300 transition-all duration-200 ease-in-out"
      />
    </div>
  )
}

export default Input
