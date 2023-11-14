"use client";
import { ReactElement, useState, useEffect } from "react";
import Form from "./CityForm";
import { City, Coordinates, Weather } from "utils/types";
import { calcIcon, calcWord, isDevOnly } from "src/utils/utils";
import { getWeather } from "utils/api-calls-external";

type Props = {
  weather: Weather;
};

const defaultCity: City = {
  id: "1752425602",
  city: "Stockholm",
  city_ascii: "Stockholm",
  lat: 59.3294,
  lng: 18.0686,
  country: "Sweden",
  iso2: "SE",
  iso3: "SWE",
  adminName: "Stockholm",
  capital: "primary",
  population: 1611776,
};

export default function MainInfo({ weather: weatherProp }: Props) {
  const [city, setCity] = useState<City>(defaultCity);
  const [weather, setWeather] = useState<Weather>(weatherProp);

  const perc = weather.daily.precipitation_probability_max[0];
  const icon = calcIcon(perc);
  const word = calcWord(perc);

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
      <h1 className="text-3xl font-semibold">Will it rain today?</h1>
      {icon}
      <div className="flex flex-col justify'
        space-y-8 border-gray-200 border-solid rounded-3xl bg-gray-800 pl-10 pr-20 py-8">
        {/* <h2 className="text-3xl font-bold mr-2">{word && word}</h2> */}
        {perc >= 0 &&
          perc <= 100 && ( // if a number is 0, 100, or in between, then perc was resolved successfully
            <>
              <h3 className="text-4xl">{city.city}</h3>
              <div className="flex flex-col space-y-1.5">
                <h2 className="text-6xl font-semibold">{`${perc}%`}</h2>
                <p className="text-gray-200 text-2xl">Chance of rain</p>
              </div>
            </>
          )}
      </div>
      <Form setCity={(city) => setCity(city)} />
    </>
  );
}
