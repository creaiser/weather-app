interface DayData {
  day: string;
  date: string;
  month: string;
  icon: string;
  max: number;
  min: number;
}

const dailyData: DayData[] = [
  { day: 'Четверг', date: '26', month: 'Марта', icon: '🌧️', max: 30, min: 18 },
  { day: 'Пятница', date: '27', month: 'Марта', icon: '🌧️', max: 30, min: 18 },
  { day: 'Суббота', date: '28', month: 'Марта', icon: '⛈️', max: 30, min: 18 },
  { day: 'Воскресенье', date: '29', month: 'Марта', icon: '🌧️', max: 30, min: 18 },
  { day: 'Понедельник', date: '30', month: 'Марта', icon: '⛈️', max: 30, min: 18 },
  { day: 'Вторник', date: '31', month: 'Марта', icon: '⛅', max: 32, min: 20 },
  { day: 'Среда', date: '1', month: 'Марта', icon: '☀️', max: 35, min: 22 },
  { day: 'Среда', date: '1', month: 'Марта', icon: '☀️', max: 35, min: 22 },
];

export default function DailyForecast() {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-4 gap-3 justify-between">
        {dailyData.map((day, i) => (
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
