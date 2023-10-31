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

export async function getWeather(): Promise<Weather> {
  const res = await fetch(`${basePath()}weather`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch weather");
  }
  return await res.json();
}

// export async function getCities(): Promise<City> {
//     const url = `${basePath()}cities`;
//     const res = await fetch(url);
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       console.log(res.status)
//       console.log(res.statusText)

//       console.log(await res.text())
//     //   throw new Error("Failed to fetch cities");
//     }

//     return await res.json();
//   }
