interface DayData {
  day: string;
  date: string;
  icon: string;
  max: number;
  min: number;
}

const mockDailyData: DayData[] = [
  { day: 'Пн', date: '23', icon: '🌨️', max: -11, min: -12 },
  { day: 'Вт', date: '24', icon: '☁️', max: -5, min: -11 },
  { day: 'Ср', date: '25', icon: '☁️', max: -6, min: -9 },
  { day: 'Чт', date: '26', icon: '☁️', max: -11, min: -12 },
  { day: 'Пт', date: '27', icon: '☁️', max: -7, min: -11 },
  { day: 'Сб', date: '28', icon: '☁️', max: -8, min: -11 },
  { day: 'Вс', date: '29', icon: '🌨️', max: -10, min: -14 },
];

export default function DailyChart() {
  const allTemps = mockDailyData.flatMap((d) => [d.max, d.min]);
  const globalMax = Math.max(...allTemps);
  const globalMin = Math.min(...allTemps);
  const range = globalMax - globalMin || 1;

  const SCALE_HEIGHT = 120;

  return (
    <div className="w-full bg-[#1a1a1a] rounded-2xl p-4">
      <h2 className="text-white text-xl mb-6">Прогноз на неделю</h2>

      <div className="flex justify-between gap-1">
        {mockDailyData.map((day) => {
          const maxPos = ((globalMax - day.max) / range) * SCALE_HEIGHT;
          const minPos = ((globalMax - day.min) / range) * SCALE_HEIGHT;
          const barHeight = minPos - maxPos;

          return (
            <div key={day.day + day.date} className="flex flex-col items-center gap-2 flex-1">
              <div
                className="relative w-full flex justify-center"
                style={{ height: SCALE_HEIGHT + 32 }}>
                <span
                  className="absolute text-white text-xs"
                  style={{ top: maxPos - 24, fontSize: 16 }}>
                  {day.max}°
                </span>

                <div
                  className="absolute w-10 rounded-xl"
                  style={{
                    top: maxPos,
                    height: Math.max(barHeight, 4),
                    background:
                      day.max > 5
                        ? 'linear-gradient(to bottom, #f0c96e, #888)'
                        : day.max < -9
                          ? 'linear-gradient(to bottom, #92a1aa, #4679a0)'
                          : 'linear-gradient(to bottom, #aaa, #555)',
                  }}
                />

                <span className="absolute text-white" style={{ top: minPos + 4, fontSize: 16 }}>
                  {day.min}°
                </span>
              </div>

              <span className="text-4xl">{day.icon}</span>

              <div className="text-center">
                <div className="text-white text-xl font-semibold ">{day.day}</div>
                <div className="text-[#aaa] text-xl">{day.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
