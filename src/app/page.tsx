import { ReactElement } from "react";
import MainInfo from "../components/MainInfo";
import {
  BsDroplet,
  BsDropletHalf,
  BsDropletFill,
  BsCloudRainHeavyFill,
} from "react-icons/bs";
import { TbDropletOff, TbQuestionMark, TbDropletHalf2 } from "react-icons/tb";
import { getCity } from "src/utils/api-calls";
import { Weather } from "utils/types";

async function getWeather(): Promise<Response> {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=59.33&longitude=18.07&daily=precipitation_probability_max&timezone=Europe%2FBerlin";
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data: Weather = await res.json();
  return Response.json(data);
}

async function getPercentage(): Promise<number> {
  const res = await getWeather();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch weather");
  }
  const weather: Weather = await res.json();
  return weather.daily.precipitation_probability_max[0];
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
  const weather = await getCity("Stockholm");

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-10">
        <MainInfo perc={perc} word={word} icon={icon} />
      </div>
    </div>
  );
}
