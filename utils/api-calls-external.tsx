
import { Coordinates, Weather } from "utils/types";

export async function getWeather(coords?: Coordinates): Promise<Weather> {
    if (!coords) coords = { lat: 59.3294, lng: 18.0686 }
    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=precipitation_probability_max&timezone=Europe%2FBerlin`;
    const res = await fetch(url);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    const data: Weather = await res.json();
    return data;
}
