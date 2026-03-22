export default function CurrentWeather() {
  return (
    <div className="flex items-center gap-8 bg-teal-700 rounded-2xl px-10 py-6 w-full justify-evenly">
      <div className="text-white font-bold text-9xl">28°C</div>

      <div className="w-75 h-75 ">
        <img src="/sun.png" alt="weather icon" className="w-full h-full " />
      </div>

      <div className="flex flex-col gap-3">
        <div className="tracking-widest font-bold text-white/90 text-5xl ">
          В Москве сегодня <br />
          Тепло и солнечно
        </div>

        <div className="flex divide-x divide-white/30">
          <div className="pr-6">
            <div className="text-white/60 text-3xl  ">ВЛАЖНОСТЬ</div>
            <div className="text-white  text-2xl font-semibold">35%</div>
          </div>
          <div className="px-6">
            <div className="text-white/60 text-3xl  ">ВЕТЕР</div>
            <div className="text-white text-2xl font-semibold">10 km/soat</div>
          </div>
          <div className="pl-6">
            <div className="text-white/60 text-3xl ">ДАВЛЕНИЕ </div>
            <div className="text-white text-2xl font-semibold">19 mmHg</div>
          </div>
        </div>
      </div>
    </div>
  );
}
