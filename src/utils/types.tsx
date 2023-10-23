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