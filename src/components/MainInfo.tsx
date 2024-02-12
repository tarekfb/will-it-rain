"use client";
import { useState, useEffect } from "react";
import Form from "./CityForm";
import { City, Weather } from "utils/types";
import {
  calcIcon,
  getErrorMessage,
} from "src/utils/utils";
import { getWeather, createCityCookie } from "utils/api-calls-external";
import { getCity } from "src/utils/api-calls-internal";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const getDateText = (): string => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const year = currentDate.getUTCFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so adding 1 to get the actual month
  return `Today -  ${day}/${month}/${year}`;
};

type Props = {
  weather: Weather;
  city: City;
};

export default function MainInfo({
  weather: weatherProp,
  city: cityProp,
}: Props) {
  const [city, setCity] = useState<City>(cityProp);
  const [weather, setWeather] = useState<Weather>(weatherProp);
  const [loading, setLoading] = useState<boolean>(false);

  const perc = weather.daily.precipitation_probability_max[0];
  const icon = calcIcon(perc);
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const setCityHandler = async (cityInput: string) => {
    if (city.city === cityInput) return;
    try {
      setLoading(true);
      const newCity = await getCity(cityInput);
      if (city.id !== newCity.id) setCity(newCity);
    } catch (error) {
      enqueueSnackbar(getErrorMessage(error), { variant: "error" });
    }
    setLoading(false);
  };

  const updateWeather = async () => {
    createCityCookie(city);

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
      <section
        className={`flex flex-col justify-center space-y-8 border-gray-300 border-solid rounded-3xl pl-10 pr-20 py-8 w-10/12 bg-opacity-20 bg-gray-100 backdrop-filter backdrop-blur-lg`}
      >
        <p>{getDateText()}</p>
        <h3 className="text-4xl">{city.city}</h3>
        <div className="flex flex-col space-y-1.5">
          <h2 className="text-6xl font-semibold">{`${perc}%`}</h2>
          <p className="text-gray-200 text-2xl">Chance of rain</p>
        </div>
      </section>
      <SnackbarProvider />
      <div className="flex justify-center items-center space-x-4 w-full">
        <Form setCity={(city) => setCityHandler(city)} loading={loading} />
      </div>
    </>
  );
}