import { NextRequest, NextResponse } from "next/server";
import { citiesPath } from "utils/constants";
import { readCsv } from "utils/read-csv";
import { City } from "utils/types";

export async function GET(request: NextRequest) {
  const param = request.nextUrl.searchParams.get("city");
  if (!param)
    return NextResponse.json(`Invalid request, param 'City' not found.`, {
      status: 400,
    });

  let cities: City[];
  try {
    cities = await readCsv(citiesPath());
  } catch (error) {
    console.log(error);
    return NextResponse.json(`Something went wrong while reading cities.`, {
      status: 500,
    });
  }

  const city = cities.find(
    (city) => city.city.toLowerCase() === param.toLowerCase()
  );
  if (!city)
    return NextResponse.json(
      `The city '${param}' either doesn't exist or is not available.`,
      { status: 404 }
    );

  return Response.json(city);
}
