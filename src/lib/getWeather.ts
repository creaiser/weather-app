export type WeatherResponse = {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    surface_pressure: number;
    relative_humidity_2m: number;
  };
  hourly: {
    temperature_2m: number[];
    time: string[];
  };
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
  };
};

export async function getWeather(latitude: string, longitude: string): Promise<WeatherResponse> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,surface_pressure,relative_humidity_2m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch weather');
  }

  const data = await res.json();
  return data;
}
