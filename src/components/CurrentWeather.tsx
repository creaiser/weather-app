interface CurrentWeatherProps {
  temperature: number;
  wind: number;
  pressure: number;
  humidity: number;
  city: string | null;
}

export default function CurrentWeather({
  temperature,
  wind,
  pressure,
  humidity,
  city,
}: CurrentWeatherProps) {
  return (
    <div className="flex items-center gap-8 bg-gray-900/25 rounded-2xl px-10 py-6 w-full justify-evenly backdrop-blur-md border-1 border-gray-500">
      <div className="flex flex-col gap-3">
        <div className="tracking-widest font-bold text-black/90 text-5xl ">
          В городе {city} <br />
          сегодня
        </div>

        <div className="flex divide-x divide-black/30">
          <div className="pr-6">
            <div className="text-black/60 text-2xl  ">ВЛАЖНОСТЬ</div>
            <div className="text-black  text-xl font-semibold">{humidity}%</div>
          </div>
          <div className="px-6">
            <div className="text-black/60 text-2xl  ">ВЕТЕР</div>
            <div className="text-black text-xl font-semibold">{wind} km/h</div>
          </div>
          <div className="pl-6">
            <div className="text-black/60 text-2xl ">ДАВЛЕНИЕ </div>
            <div className="text-black text-xl font-semibold">{pressure} mmHg</div>
          </div>
        </div>
      </div>

      <div className="w-75 h-75  text-[200px]">
        <span>☀️</span>
      </div>

      <div className="text-black font-bold text-9xl">{temperature}°C</div>
    </div>
  );
}
