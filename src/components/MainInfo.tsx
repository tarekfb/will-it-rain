"use client";
import { ReactElement, useState } from "react";
import Form from "./CityForm";
import { City, Weather } from "utils/types";

type Props = {
  perc: number;
  icon: ReactElement;
  word: string;
};

export default function MainInfo({ perc, icon, word }: Props) {
  const [city, setCity] = useState();

  const setCityHandler = (city: City): void => {
    console.log(city);
  };
  return (
    <>
      <h1 className="text-3xl">Will it rain?</h1>
      {icon}
      <div className="flex flex-col items-center justify-center space-y-2">
        <h2 className="text-3xl font-bold mr-2">{word && word}</h2>
        {perc >= 0 &&
          perc <= 100 && ( // if a number is 0, 100, or in between, then perc was resolved successfully
            <h3 className="text-xl">
              <strong>{`${perc}%`}</strong> chance of rain
            </h3>
          )}
        <Form setCity={(city) => setCityHandler(city)} />
      </div>
    </>
  );
}
