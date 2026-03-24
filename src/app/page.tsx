import CurrentWeather from '@/components/CurrentWeather';
import DailyChart from '@/components/DailyChart';
import HourlyChart from '@/components/HourlyChart';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <SearchBar />
      <CurrentWeather />
      <HourlyChart />
      <DailyChart />
    </main>
  );
}
