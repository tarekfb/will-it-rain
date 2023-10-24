import { ReactElement } from "react";
import MainInfo from "../components/MainInfo";
import {
  BsDroplet,
  BsDropletHalf,
  BsDropletFill,
  BsCloudRainHeavyFill,
} from "react-icons/bs";
import { TbDropletOff, TbQuestionMark, TbDropletHalf2 } from "react-icons/tb";
import { Weather } from "src/utils/types";


async function getWeather(): Promise<Weather> {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=59.33&longitude=18.07&daily=precipitation_probability_max&timezone=Europe%2FBerlin";
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

async function getWeatherNew() {
  const res = await fetch("http://localhost:3000/api/weather")
  const data = res.json();
  console.log(data);
  return data;
}

async function getPercentage(): Promise<number> {
  const weather = await getWeatherNew();
  return weather.daily.precipitation_probability_max[0];
}

async function getCities() {
  const url = 'http://localhost:3000/api/city';
  const res = await fetch(url);
  console.log(res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

const calcWord = (perc: number) => {
  if (perc < 5) return "Not likely";
  if (perc < 25) return "Possibly";
  if (perc < 50) return "Perhaps";
  if (perc < 75) return "Probably";
  if (perc < 95) return "Most likely";
  if (perc < 100) return "Yes";
  return "We're not sure";
};

const calcIcon = (perc: number): ReactElement => {
  const size = 140;
  if (perc < 5) return <TbDropletOff size={size} />;
  if (perc < 25) return <BsDroplet size={size} />;
  if (perc < 50) return <BsDropletHalf size={size} />;
  if (perc < 75) return <TbDropletHalf2 size={size} />;
  if (perc < 95) return <BsDropletFill size={size} />;
  if (perc < 100 || perc === 100) return <BsCloudRainHeavyFill size={size} />;
  return <TbQuestionMark size={size} />;
};

export default async function Home() {
  const perc = await getPercentage();
  const icon = calcIcon(perc);
  const word = calcWord(perc);
  const test = await getWeather();

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-10">
        <MainInfo perc={perc} word={word} icon={icon} test={test} />
      </div>
    </div>
  );
}