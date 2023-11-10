export type Weather = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
    time: string;
    precipitation_probability_max: string;
  };
  daily: {
    time: string[];
    precipitation_probability_max: number[];
  };
};

export type City = {
  id: string;
  city: string;
  city_ascii: string;
  lat: number;
  lng: number;
  country: string;
  iso2: string;
  iso3: string;
  adminName: string;
  capital: string;
  population: number;
}


export type SlimCity = {
  id: string;
  city: string;
}

export type Coordinates = {
  lat: number;
  lng: number;
}