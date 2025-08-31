import React from 'react'
import { useWeather } from '../../context/Weather'
import { Wind, Waves } from 'lucide-react'

const Stats = () => {
  const weather = useWeather();
  const windSpeed = weather?.data?.current?.wind_kph;
  const airQuality = weather?.data?.current?.air_quality?.['gb-defra-index'];

  const getAirQualityColor = (value) => {
    if (value >= 1 && value <= 3) return 'text-green-500'
    if (value >= 4 && value <= 6) return 'text-yellow-500'
    if (value >= 7 && value <= 9) return 'text-red-500'
    if (value === 10) return 'text-red-700'
    return 'text-gray-400'
  }

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
        <div className="flex items-center justify-center gap-2 text-amber-600 mb-1">
          <Wind size={16} />
          <span className="text-xs font-medium">Wind Speed</span>
        </div>
        <div className="text-lg font-bold text-gray-700">
          {windSpeed ? `${windSpeed} kph` : '--'}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
        <div className="flex items-center justify-center gap-2 text-amber-600 mb-1">
          <Waves size={16} />
          <span className="text-xs font-medium">Air Quality</span>
        </div>
        <div className={`text-lg font-bold ${getAirQualityColor(airQuality)}`}>
          {airQuality || '--'}
        </div>
      </div>
    </div>
  )
}

export default Stats