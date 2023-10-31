import csv from "csv-parser";
import fs from "fs";
import { City } from "utils/types";

export async function readCsv(path: string): Promise<City[]> {
  const results: City[] = [];
  return new Promise((resolve) => {
    fs.createReadStream(path)
      .pipe(csv())
      .on("data", (data: City) => {
        results.push(data);
      })
      .on("end", () => {
        resolve(results);
      });
  });
}

export const basePath = (): string =>
  `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "willitrain.site"
  }/api/`;
