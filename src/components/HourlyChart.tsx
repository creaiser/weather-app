'use client';

import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: {
    time: string;
    temp: number;
    icon: string;
  };
}

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
}

const mockData = [
  { time: '19:00', temp: 2, icon: '🌙' },
  { time: '20:00', temp: 1, icon: '🌙' },
  { time: '21:00', temp: -1, icon: '🌙' },
  { time: '22:00', temp: -1, icon: '🌙' },
  { time: '23:00', temp: -1, icon: '🌙' },
  { time: '00:00', temp: -2, icon: '🌙' },
  { time: '01:00', temp: -3, icon: '🌙' },
  { time: '02:00', temp: -4, icon: '🌙' },
  { time: '03:00', temp: -4, icon: '🌙' },
  { time: '04:00', temp: -5, icon: '🌙' },
  { time: '05:00', temp: -5, icon: '🌙' },
  { time: '06:00', temp: -5, icon: '☀️' },
  { time: '07:00', temp: -3, icon: '☀️' },
  { time: '08:00', temp: 1, icon: '☀️' },
  { time: '09:00', temp: 3, icon: '☀️' },
  { time: '10:00', temp: 5, icon: '☀️' },
  { time: '11:00', temp: 6, icon: '☀️' },
  { time: '12:00', temp: 7, icon: '☀️' },
  { time: '13:00', temp: 7, icon: '☀️' },
  { time: '14:00', temp: 7, icon: '☀️' },
  { time: '15:00', temp: 7, icon: '☀️' },
  { time: '16:00', temp: 6, icon: '☀️' },
  { time: '17:00', temp: 4, icon: '☀️' },
];

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

const CustomTick = ({ x, y, payload }: CustomTickProps) => {
  if (!x || !y || !payload) return null;
  const item = mockData.find((d) => d.time === payload.value);
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={14} textAnchor="middle" fill="black" fontSize={14}>
        {payload.value}
      </text>
      <text x={0} y={0} dy={34} textAnchor="middle" fontSize={16}>
        {item?.icon}
      </text>
    </g>
  );
};

export default function HourlyChart() {
  return (
    <div className="w-full bg-gray-900/25 rounded-2xl p-4 backdrop-blur-md border-1 border-gray-500">
      <h2 className="text-black text-xl mb-4">Почасовой прогноз</h2>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={mockData} margin={{ top: 30, right: 20, left: 20, bottom: 30 }}>
          <defs>
            <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4c4c4c" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#d1d5dc" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="time"
            tick={<CustomTick />}
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
