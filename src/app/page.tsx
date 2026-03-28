import CurrentWeather from '@/components/CurrentWeather';
import DailyChart from '@/components/DailyChart';
import HourlyChart from '@/components/HourlyChart';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className="flex flex-col gap-8 px-10 py-5 relative">
      <div className="fixed inset-0 bg-[url(/pattern.jpg)] bg-center bg-repeat blur-sm opacity-60 -z-10" />
      <SearchBar />
      <CurrentWeather />
      <HourlyChart />
      <DailyChart />
    </main>
  );
}
