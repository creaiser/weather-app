interface CurrentWeatherProps {
  temperature: number;
  wind: number;
  pressure: number;
  humidity: number;
  city: string | null;
}

export default function CurrentWeather({
  temperature,
  wind,
  pressure,
  humidity,
  city,
}: CurrentWeatherProps) {
  return (
    <div
      className="
  flex items-center gap-3 
  bg-gray-900/25 
  rounded-xl xsm:rounded-2xl 
  w-full justify-evenly 
  backdrop-blur-md 
  border border-gray-500
  p-3 xsm:p-6 md:p-8 lg:p-10 xl:p-12 xxl:p-14
">
      <div className="flex flex-col gap-3 max-w-[120px] xsm:max-w-[220px] md:max-w-[440px] lg:max-w-[520px] xl:max-w-[600px] xxl:max-w-[700px]">
        <div
          className="
      tracking-widest font-bold text-black/90 
      text-[16px] 
      xsm:text-3xl 
      md:text-4xl 
      lg:text-5xl 
      xl:text-6xl 
      xxl:text-7xl
    ">
          В городе {city} <br />
          сегодня
        </div>

        <div className="flex divide-x divide-black/30">
          <div className="pr-1">
            <div
              className="
          text-black/60 
          text-[8px] 
          xsm:text-[10px] 
          md:text-[14px] 
          lg:text-[16px] 
          xl:text-[18px]
        ">
              ВЛАЖНОСТЬ
            </div>
            <div
              className="
          text-black font-semibold 
          text-[10px]  
          xsm:text-sm 
          md:text-[18px] 
          lg:text-[20px] 
          xl:text-[22px]
        ">
              {humidity}%
            </div>
          </div>

          <div className="px-1">
            <div
              className="
          text-black/60 
          text-[8px] 
          xsm:text-[10px] 
          md:text-[14px] 
          lg:text-[16px] 
          xl:text-[18px]
        ">
              ВЕТЕР
            </div>
            <div
              className="
          text-black font-semibold 
          text-[10px] 
          xsm:text-sm 
          md:text-[18px] 
          lg:text-[20px] 
          xl:text-[22px]
        ">
              {wind} km/h
            </div>
          </div>

          <div className="pl-1">
            <div
              className="
          text-black/60 
          text-[8px] 
          xsm:text-[10px] 
          md:text-[14px] 
          lg:text-[16px] 
          xl:text-[18px]
        ">
              ДАВЛЕНИЕ
            </div>
            <div
              className="
          text-black font-semibold 
          text-[10px] 
          xsm:text-sm 
          md:text-[18px] 
          lg:text-[20px] 
          xl:text-[22px]
        ">
              {pressure} mmHg
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full items-center gap-2 xsm:gap-3 lg:gap-4 xl:gap-5">
        <div
          className="
      text-black font-bold 
      text-[20px] 
      xsm:text-4xl 
      sm:hidden
    ">
          {temperature}°C
        </div>

        <span
          className="
      text-[40px] 
      xsm:text-[60px] 
      md:text-[100px] 
      lg:text-[120px] 
      xl:text-[140px] 
      xxl:text-[160px]
    ">
          ☀️
        </span>
      </div>

      <div
        className="
    text-black font-bold 
    hidden sm:block 
    text-[16px]  
    xsm:text-4xl 
    md:text-[60px] 
    lg:text-[80px] 
    xl:text-[100px] 
    xxl:text-[120px]
  ">
        {temperature}°C
      </div>
    </div>
  );
}
