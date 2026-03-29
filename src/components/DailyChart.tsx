interface DailyChartProps {
  daily_max: number[];
  daily_min: number[];
  daily_time: string[];
}

interface DayData {
  day: string;
  date: string;
  month: string;
  icon: string;
  max: number;
  min: number;
}

function transformDaily(max: number[], min: number[], time: string[]): DayData[] {
  return time.map((t, i) => {
    const dateObj = new Date(t);

    const day = dateObj.toLocaleDateString('ru-RU', { weekday: 'long' });
    const date = dateObj.getDate().toString();
    const month = dateObj.toLocaleDateString('ru-RU', { month: 'long' });

    return {
      day,
      date,
      month,
      icon: '☀️',
      max: Math.round(max[i]),
      min: Math.round(min[i]),
    };
  });
}

export default function DailyForecast({ daily_max, daily_min, daily_time }: DailyChartProps) {
  const data = transformDaily(daily_max, daily_min, daily_time);

  return (
    <div className="w-full ">
      <div className="grid grid-cols-4 gap-3 justify-between">
        {data.map((day, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center gap-3 bg-gray-900/25  rounded-2xl px-3 py-4 backdrop-blur-md border-1 border-gray-500">
            <div className="text-center">
              <div className="font-bold text-gray-900 text-lg">
                {day.date} {day.month}
              </div>
              <div className="text-gray-500 text-1xl">{day.day}</div>
            </div>

            <span className="text-4xl">{day.icon}</span>

            <div className="flex gap-2 items-baseline">
              <span className="text-gray-800 font-bold text-xl">{day.max}°C</span>
              <span className="text-gray-700 text-lg">{day.min}°C</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
