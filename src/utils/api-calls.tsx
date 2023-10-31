import { error } from "console";
import { City, Weather } from "./types";

export async function getCity(city: string): Promise<City> {
    const url = `http://localhost:3000/api/city?city=${city}`;
    const res = await fetch(url);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch city");
    }

    return await res.json();
}

export async function getWeather(): Promise<Weather> {
    const res = await fetch("http://localhost:3000/api/weather")
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch weather");
    }
    return await res.json();
}


// export async function getCities(): Promise<City> {
//     const url = `http://localhost:3000/api/cities`;
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