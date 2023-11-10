import { NextRequest, NextResponse } from "next/server";
import { citiesPath } from "utils/constants";
import { readCsv } from "utils/read-csv";

export async function GET(request: NextRequest) {
  const cities = await readCsv(citiesPath(process.env.NODE_ENV));

  const param = request.nextUrl.searchParams.get("city");
  if (!param)
    return NextResponse.json(
      { error: `Invalid request, param 'City' not found.` },
      { status: 400 }
    );

  const city = cities.find((city) => city.city.toLowerCase() === param.toLowerCase());
  if (!city)
    return NextResponse.json(
      { error: `Unable to find city: ${param}.` },
      { status: 404 }
    );

  return Response.json(city);
}
