"use server";
import { cookies } from "next/headers";
import { City, Coordinates, Weather } from "utils/types";

export async function getWeather(coords: Coordinates): Promise<Weather> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=precipitation_probability_max&timezone=Europe%2FBerlin`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch weather");
  }

  const data: Weather = await res.json();
  return data;
}

export async function createCityCookie(city: City) {
  cookies().set("city", JSON.stringify(city));
}
