'use client';

import { useRef, useState } from 'react';
import { City, getCities } from '@/lib/getCities';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState<City[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const lastQueryRef = useRef('');
  const router = useRouter();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = (value: string) => {
    setQuery(value);
    lastQueryRef.current = value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      if (!value) {
        setCities([]);
        return;
      }

      const results = await getCities(value);
      setCities(results);
    }, 400);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="flex items-center gap-3 bg-white/75 border-1 border-gray-500 rounded-full px-4 py-2.5 shadow-sm backdrop-blur-md">
        <input
          type="text"
          placeholder="Поиск города..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 outline-none text-black placeholder-gray-600 bg-transparent text-[16px]"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="22"
          height="22"
          viewBox="0 0 50 50">
          <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z"></path>
        </svg>
      </div>

      {isFocused && cities.length > 0 && (
        <ul className=" absolute top-full mt-2 w-full bg-gray-200/60 border-1 border-gray-500 rounded-2xl shadow-lg overflow-hidden z-50 backdrop-blur-md">
          {cities.map((city) => (
            <li
              key={city.id}
              onMouseDown={() => {
                router.push(`/weather?latitude=${city.latitude}&longitude=${city.longitude}`);
              }}
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-200/50 transition-colors border-b border-gray-500 last:border-none">
              <span className="text-gray-500">✦</span>
              <div>
                <div className="text-sm font-semibold text-black-800">{city.name}</div>
                <div className="text-sm text-black-400">
                  {city.name}, {city.country}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
