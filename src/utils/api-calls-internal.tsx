import { City, Weather } from "utils/types";
import { basePath } from "./utils";

export async function getCity(city: string): Promise<City> {
  const url = `${basePath()}city?city=${city}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  return await res.json();
}
