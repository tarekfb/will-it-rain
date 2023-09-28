"use client";
import { ReactElement } from "react";

type Props = {
  perc: number;
  icon: ReactElement;
  word: string;
};

export default function MainInfo({ perc, icon, word }: Props) {
  // useEffect(() => {
  //   const getProbability = async () => {
  //     const api =
  //       "https://api.open-meteo.com/v1/forecast?latitude=59.33&longitude=18.07&daily=precipitation_probability_max&timezone=Europe%2FBerlin";
  //     const data = await fetch(api);
  //     const obj = await data.json();
  //     const percentage = obj.daily.precipitation_probability_max[0];
  //     const isBetweenZeroAndHundred = /^([1-9]\d|\d|100)$/.test(percentage);
  //     if (isBetweenZeroAndHundred) {
  //       const word = calcWord(percentage);
  //       const icon = calcIcon(percentage);
  //       setPercentage(percentage);
  //       setWord(word);
  //       setIcon(icon);
  //     } else {
  //       setWord("Something went wrong");
  //       setIcon(<TbQuestionMark size={140} />);
  //     }
  //   };
  //   getProbability();
  // }, []);

  return (
    <>
      <h1 className="text-3xl">Will it rain?</h1>
      {icon}
      <div className="flex flex-col items-center justify-center space-y-2">
        <h2 className="text-3xl font-bold mr-2">{word && word}</h2>
        {perc >= 0 && perc <= 100 && ( // if a number is 0, 100, or in between -> if everything is working
          <h3 className="text-xl">
            <strong>{`${perc}%`}</strong> chance of rain
          </h3>
        )}
      </div>
    </>
  );
}
