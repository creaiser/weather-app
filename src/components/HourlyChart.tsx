'use client';

import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface HourlyChartProps {
  hourly_temp: number[];
  hourly_time: string[];
}

interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: ChartItem;
}

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
  data?: ChartItem[];
}

interface ChartItem {
  time: string;
  temp: number;
  icon: string;
}

function transformData(temp: number[], time: string[]): ChartItem[] {
  return time.slice(0, 24).map((t, i) => {
    const hour = new Date(t).getHours();

    return {
      time: `${hour}:00`,
      temp: temp[i],
      icon: hour >= 6 && hour < 18 ? '☀️' : '🌙',
    };
  });
}

const CustomDot = ({ cx, cy, payload }: CustomDotProps) => {
  if (!cx || !cy || !payload) return null;
  return (
    <g>
      <text x={cx} y={cy - 10} textAnchor="middle" fill="black" fontSize={18}>
        {payload.temp}°
      </text>
    </g>
  );
};

const CustomTick = ({ x, y, payload, data }: CustomTickProps) => {
  if (!x || !y || !payload || !data) return null;

  const item = data.find((d) => d.time === payload.value);

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={14} textAnchor="middle" fill="black" fontSize={12}>
        {payload.value}
      </text>
      <text x={0} y={0} dy={30} textAnchor="middle" fontSize={14}>
        {item?.icon}
      </text>
    </g>
  );
};

export default function HourlyChart({ hourly_temp, hourly_time }: HourlyChartProps) {
  const data = transformData(hourly_temp, hourly_time);
  return (
    <div className="w-full bg-gray-900/25 rounded-2xl p-4 backdrop-blur-md border-1 border-gray-500">
      <h2 className="text-black text-xl mb-4">Почасовой прогноз</h2>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data} margin={{ top: 30, right: 20, left: 20, bottom: 30 }}>
          <defs>
            <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4c4c4c" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#d1d5dc" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="time"
            tick={<CustomTick data={data} />}
            tickLine={false}
            axisLine={false}
            interval={0}
          />

          <YAxis hide />

          <Area
            type="monotone"
            dataKey="temp"
            stroke="#1c1c1c"
            strokeWidth={2}
            fill="url(#tempGrad)"
            dot={<CustomDot />}
            activeDot={{ r: 5, fill: '#1c1c1c' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
