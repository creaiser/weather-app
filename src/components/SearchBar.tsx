'use client';

const mockResults = [
  { name: 'Душанбе', region: 'Душанбе', country: 'Таджикистан' },
  { name: 'Москва', region: 'Москва', country: 'Россия' },
  { name: 'Ташкент', region: 'Ташкент', country: 'Узбекистан' },
];

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="flex items-center gap-3 bg-white border-2 border-gray-500 rounded-full px-4 py-2.5 shadow-sm">
        <input
          type="text"
          placeholder="Поиск города..."
          className="flex-1 outline-none text-gray-500 placeholder-gray-400 bg-transparent text-sm"
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

      <ul className=" absolute top-full mt-2 w-full bg-white border border-gray-500 rounded-2xl shadow-lg overflow-hidden z-50">
        {mockResults.map((city, i) => (
          <li
            key={i}
            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors border-b border-gray-100 last:border-none">
            <span className="text-gray-500">✦</span>
            <div>
              <div className="text-sm font-semibold text-gray-800">{city.name}</div>
              <div className="text-xs text-gray-400">
                {city.region}, {city.country}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
