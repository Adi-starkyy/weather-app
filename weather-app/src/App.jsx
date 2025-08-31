import { useEffect } from 'react'
import React from 'react'
import Card from './components/card'
import Button from './components/button'
import Input from './components/input'
import Stats from "./components/stats"

import { Search, Github, Linkedin } from 'lucide-react'

import { useWeather } from '../context/Weather'

const App = () => {

  useEffect(() => {
    weather.fetchCurrentLocationData();
  },[]);

  const weather = useWeather();

  const searchButton = () => {
    return (
      weather.fetchData()
    )
  }

  console.log(weather);

  return (
    <div className="h-140 w-100 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50 p-4 rounded-lg shadow-lg">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <h1 className="text-2xl font-bold text-amber-700 text-center mb-2">
          <span className="mr-2">🌤</span>
          Weather Now
        </h1>

        {/* Search Section */}
        <div className="flex gap-2 items-center justify-center">
          <Input />
          <button 
            onClick={weather.fetchData}
            className="btn btn-circle btn-sm btn-primary bg-amber-500 hover:bg-amber-600 border-none"
          >
            <Search size={18} />
          </button>
        </div>

        {/* Weather Card */}
        <Card />

        {/* Stats */}
        <Stats />

        {/* Social Links */}
        <div className="flex justify-center gap-3 mt-2">
          <a
            href="https://github.com/Adi-starkyy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/80 hover:bg-white hover:shadow-md transition-all duration-300 text-amber-600 hover:text-amber-700"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/adrijobhowmik05/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/80 hover:bg-white hover:shadow-md transition-all duration-300 text-amber-600 hover:text-amber-700"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App