"use client";
import { useState, useEffect } from "react";
import Form from "./CityForm";
import { City, Weather } from "utils/types";
import { calcIcon, defaultCity } from "src/utils/utils";
import { getWeather } from "utils/api-calls-external";

type Props = {
  weather: Weather;
  city: City;
};

export default function MainInfo({ weather: weatherProp, city: cityProp }: Props) {
  const [city, setCity] = useState<City>(cityProp);
  const [weather, setWeather] = useState<Weather>(weatherProp);

  const perc = weather.daily.precipitation_probability_max[0];
  const icon = calcIcon(perc);

  const updateWeather = async () => {
    const { lat, lng } = city;
    const weather = await getWeather({ lat, lng });
    setWeather(weather);
  };

  useEffect(() => {
    updateWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);
  return (
    <>
      {icon}
      <div
        className="flex flex-col justify'
        space-y-8 border-gray-200 border-solid rounded-3xl bg-gray-800 pl-10 pr-20 py-8 w-10/12 "
      >
        <>
          <h3 className="text-4xl">{city.city}</h3>
          <div className="flex flex-col space-y-1.5">
            <h2 className="text-6xl font-semibold">{`${perc}%`}</h2>
            <p className="text-gray-200 text-2xl">Chance of rain</p>
          </div>
        </>
      </div>
      <Form setCity={(city) => setCity(city)} />
    </>
  );
}
