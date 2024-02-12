"use server";
import { getWeather } from "utils/api-calls-external";
import MainInfo from "../components/MainInfo";
import { cookies } from "next/headers";
import { City } from "utils/types";
import { calcBg, defaultCity } from "src/utils/utils";

const initGetCity = (): City => {
  const cookieStore = cookies();
  const cookie = cookieStore.get("city");
  if (!cookie) return defaultCity;
  const city: City = JSON.parse(cookie?.value);
  return city;
};

export default async function Home() {
  const city = initGetCity();
  const weather = await getWeather({ lat: city?.lat, lng: city?.lat });
  const bg = calcBg(weather.daily.precipitation_probability_max[0]);

  const bgStyle = {
    backgroundImage: `url('/${bg}.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div
      className={`min-h-screen min-w-screen flex flex-row items-center justify-center`}
      style={bgStyle}
    >
      <div className="flex flex-col items-center justify-center space-y-10 w-full">
        <h1 className="text-3xl font-semibold">Will it rain today?</h1>
        <MainInfo weather={weather} city={city ?? defaultCity} />
      </div>
    </div>
  );
}
