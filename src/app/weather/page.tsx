'use client';

import { useSearchParams } from 'next/navigation';

export default function WeatherPage() {
  const searchParams = useSearchParams();

  const lat = searchParams.get('latitude');
  const lon = searchParams.get('longitude');

  return (
    <div>
      {lat} / {lon}
    </div>
  );
}
