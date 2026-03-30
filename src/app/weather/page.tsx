'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import CurrentWeather from '@/components/CurrentWeather';
import DailyChart from '@/components/DailyChart';
import HourlyChart from '@/components/HourlyChart';
import SearchBar from '@/components/SearchBar';
import { getWeather, WeatherResponse } from '@/lib/getWeather';

export default function WeatherPage() {
  const searchParams = useSearchParams();
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  const lat = searchParams.get('latitude');
  const lon = searchParams.get('longitude');

  useEffect(() => {
    if (!lat || !lon) return;

    getWeather(lat, lon).then(setWeather);
  }, [lat, lon]);

  if (!weather)
    return (
      <main className="flex flex-col gap-8 px-10 py-5 relative">
        <div className="fixed inset-0 bg-[url(/pattern.jpg)] bg-center bg-repeat blur-sm opacity-60 -z-10" />
        <SearchBar />
        <div>Loading...</div>
      </main>
    );

  return (
    <main className="flex flex-col gap-8 px-10 py-5 relative">
      <div className="fixed inset-0 bg-[url(/pattern.jpg)] bg-center bg-repeat blur-sm opacity-60 -z-10" />
      <SearchBar />
      <CurrentWeather
        temperature={weather.current.temperature_2m}
        wind={weather.current.wind_speed_10m}
        pressure={weather.current.surface_pressure}
        humidity={weather.current.relative_humidity_2m}
      />
      <HourlyChart hourly_temp={weather.hourly.temperature_2m} hourly_time={weather.hourly.time} />
      <DailyChart
        daily_max={weather.daily.temperature_2m_max}
        daily_min={weather.daily.temperature_2m_min}
        daily_time={weather.daily.time}
      />
    </main>
  );
}
