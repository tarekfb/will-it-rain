import { City, Weather } from "utils/types";
import { basePath } from "./utils";

export async function getCity(city: string): Promise<City> {
  const url = `${basePath()}city?city=${city}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch city");
  }

  return await res.json();
}