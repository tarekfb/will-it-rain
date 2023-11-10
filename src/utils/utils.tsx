import { ReactElement } from "react";
import {
  BsDroplet,
  BsDropletHalf,
  BsDropletFill,
  BsCloudRainHeavyFill,
} from "react-icons/bs";
import { TbDropletOff, TbQuestionMark, TbDropletHalf2 } from "react-icons/tb";

export const basePath = (): string =>
  `${process.env.NODE_ENV === "production" ? "" : "http://localhost:3000"}/api/`;

export const isDevOnly = (): boolean => {
  return process.env.NODE_ENV === "development"
}

export const calcWord = (perc: number) => {
  if (perc < 5) return "Not likely";
  if (perc < 25) return "Possibly";
  if (perc < 50) return "Perhaps";
  if (perc < 75) return "Probably";
  if (perc < 95) return "Most likely";
  if (perc < 100) return "Yes";
  return "We're not sure";
};

export const calcIcon = (perc: number): ReactElement => {
  const size = 140;
  if (perc < 5) return <TbDropletOff size={size} />;
  if (perc < 25) return <BsDroplet size={size} />;
  if (perc < 50) return <BsDropletHalf size={size} />;
  if (perc < 75) return <TbDropletHalf2 size={size} />;
  if (perc < 95) return <BsDropletFill size={size} />;
  if (perc < 100 || perc === 100) return <BsCloudRainHeavyFill size={size} />;
  return <TbQuestionMark size={size} />;
};