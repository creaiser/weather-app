'use client';

import { useScreenSize } from '@/hooks/useScreenSize';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface HourlyChartProps {
  hourly_temp: number[];
  hourly_time: string[];
}

interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: ChartItem;
  width: number;
}

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
  data?: ChartItem[];
  width: number;
}

interface ChartItem {
  time: string;
  temp: number;
  icon: string;
}

function transformData(temp: number[], time: string[], limit = 24) {
  return time.slice(0, limit).map((t, i) => {
    const hour = new Date(t).getHours();

    return {
      time: `${hour}:00`,
      temp: temp[i],
      icon: hour >= 6 && hour < 18 ? '☀️' : '🌙',
    };
  });
}

function getLimit(width: number): number {
  if (width < 500) return 8;
  if (width < 690) return 12;
  if (width < 988) return 16;
  return 24;
}

const CustomDot = ({ cx, cy, payload, width }: CustomDotProps) => {
  if (!cx || !cy || !payload) return null;
  return (
    <g>
      <text
        x={cx}
        y={cy - 8}
        textAnchor="middle"
        fill="black"
        fontSize={Math.max(12, Math.min(16, width / 60))}>
        {Math.round(payload.temp)}°
      </text>
    </g>
  );
};

const CustomTick = ({ x, y, payload, data, width }: CustomTickProps) => {
  if (!x || !y || !payload || !data) return null;

  const item = data.find((d) => d.time === payload.value);

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={12}
        textAnchor="middle"
        fill="black"
        fontSize={Math.max(10, Math.min(14, width / 70))}>
        {payload.value}
      </text>

      <text
        x={0}
        y={15}
        dy={24}
        textAnchor="middle"
        fontSize={Math.max(12, Math.min(18, width / 50))}>
        {item?.icon}
      </text>
    </g>
  );
};

export default function HourlyChart({ hourly_temp, hourly_time }: HourlyChartProps) {
  const width = useScreenSize();
  const data = transformData(hourly_temp, hourly_time, getLimit(width));
  return (
    <div className="w-full bg-gray-900/25 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 backdrop-blur-md border border-gray-500">
      <h2 className="text-black text-sm xsm:text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4">
        Почасовой прогноз
      </h2>
      <ResponsiveContainer
        width="100%"
        height={120}
        className="sm:h-[140px] md:h-[160px] lg:h-[180px]">
        <AreaChart data={data} margin={{ top: 30, right: 20, left: 20, bottom: 30 }}>
          <defs>
            <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4c4c4c" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#d1d5dc" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="time"
            tick={<CustomTick data={data} width={width} />}
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
            dot={<CustomDot width={width} />}
            activeDot={{ r: 5, fill: '#1c1c1c' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
