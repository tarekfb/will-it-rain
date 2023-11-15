import { ReactElement } from "react";
import {
  BsDroplet,
  BsDropletHalf,
  BsDropletFill,
  BsCloudRainHeavyFill,
} from "react-icons/bs";
import { TbDropletOff, TbQuestionMark, TbDropletHalf2 } from "react-icons/tb";
import { City } from "utils/types";

export enum PercentageBreaks {
  No = 3,
  Unlikely = 25,
  Possibly = 50,
  Probably = 95,
  Yes = 100,
}

export const basePath = (): string =>
  `${
    process.env.NODE_ENV === "production" ? "" : "http://localhost:3000"
  }/api/`;

export const isDevOnly = (): boolean => {
  return process.env.NODE_ENV === "development";
};

export const calcIcon = (perc: number): ReactElement => {
  const size = 140;

  if (perc <= PercentageBreaks.No) return <TbDropletOff size={size} />;
  if (perc <= PercentageBreaks.Unlikely) return <BsDroplet size={size} />;
  if (perc <= PercentageBreaks.Possibly) return <BsDropletHalf size={size} />;
  if (perc <= PercentageBreaks.Probably) return <BsDropletFill size={size} />;
  if (perc <= PercentageBreaks.Yes) return <BsCloudRainHeavyFill size={size} />;
  return <TbQuestionMark size={size} />;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) message = error.message;
  message = String(error);
  message.replace(/\"/g, "");
  return message;
};

export const defaultCity: City = {
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
