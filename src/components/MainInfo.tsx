"use client";
import { ReactElement } from "react";
import { parse } from 'csv-parse';



type Props = {
  perc: number;
  icon: ReactElement;
  word: string;
};

export default function MainInfo({ perc, icon, word }: Props) {

  const readCsv = () => {
    const csvFilePath = '/assets/worldcities.csv';

    const readed = parse(csvFilePath);
    console.log(readed);
    return readed;
  }

  const test = () => {
    console.log(readCsv());
  }
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
        <button onClick={() => test()}>hej</button>
      </div>
    </>
  );
}
