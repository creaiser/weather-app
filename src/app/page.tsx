import CurrentWeather from '@/components/CurrentWeather';
import HourlyChart from '@/components/HourlyChart';

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      {/* <SearchBar /> */}
      <CurrentWeather />
      <HourlyChart />
      {/* <DailyForecast /> */}
    </main>
  );
}
