"use client";
import { ReactElement, useEffect, useState } from "react";
import {
  BsDroplet,
  BsDropletHalf,
  BsDropletFill,
  BsCloudRainHeavyFill,
} from "react-icons/bs";
import { TbDropletOff, TbQuestionMark, TbDropletHalf2 } from "react-icons/tb";

export default function MainInfo() {
  const [percentage, setPercentage] = useState<number>(NaN);
  const [word, setWord] = useState<string>("");
  const [icon, setIcon] = useState<ReactElement | null>(null);

  const calcWord = (perc: number) => {
    if (perc < 5) return "No";
    if (perc < 25) return "Probably not";
    if (perc < 50) return "Perhaps";
    if (perc < 75) return "Probably";
    if (perc < 95) return "Most likely";
    if (perc < 100) return "Yes";
    return "Unsure";
  };

  const calcIcon = (perc: number): ReactElement | null => {
    const size = 140;
    if (perc < 5) return <TbDropletOff size={size} />;
    if (perc < 25) return <BsDroplet size={size} />;
    if (perc < 50) return <BsDropletHalf size={size} />;
    if (perc < 75) return <TbDropletHalf2 size={size} />;
    if (perc < 95) return <BsDropletFill size={size} />;
    if (perc < 100 || perc === 100) return <BsCloudRainHeavyFill size={size} />;
    return <TbQuestionMark size={size} />;
  };

  useEffect(() => {
    const getProbability = async () => {
      const api =
        "https://api.open-meteo.com/v1/forecast?latitude=59.33&longitude=18.07&daily=precipitation_probability_max&timezone=Europe%2FBerlin";
      const data = await fetch(api);
      const obj = await data.json();
      const percentage = obj.daily.precipitation_probability_max[0];
      const isBetweenZeroAndHundred = /^([1-9]\d|\d|100)$/.test(percentage);
      if (isBetweenZeroAndHundred) {
        const word = calcWord(percentage);
        const icon = calcIcon(percentage);
        setPercentage(percentage);
        setWord(word);
        setIcon(icon);
      } else {
        setWord("Something went wrong");
        setIcon(<TbQuestionMark size={140} />);
      }
    };
    getProbability();
  }, []);

  return (
    <>
      <h1 className="text-3xl">Will it rain?</h1>
      {icon}
      <div className="flex flex-col items-center justify-center space-y-2">
        <h2 className="text-3xl font-bold mr-2">{word && word}</h2>
        {percentage >= 0 && percentage <= 100 && (
          <h3 className="text-xl">
            <strong>{`${percentage}%`}</strong> chance of rain
          </h3>
        )}
      </div>
    </>
  );
}
