import { useEffect } from 'react'
import React from 'react'
import Card from './components/card'
import Button from './components/button'
import Input from './components/input'

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
    <div className="app h-90 w-100 bg-gradient-to-br from-amber-200 to-yellow-100 shadow-lg p-6 flex flex-col items-center justify-between space-y-4">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500 text-center">🌤 Weather App</h1>

      <div className="w-full flex flex-col items-center space-y-3">
        <Input className="w-4/5 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400" />
        <div className="flex space-x-4">
          <Button 
            onClick={searchButton} 
            value = "Search"
          />
        </div>
      </div>

      <Card className="w-full bg-white rounded-xl shadow-inner p-4" />
   </div>
  )
}

export default App