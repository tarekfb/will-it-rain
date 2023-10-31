import { NextRequest, NextResponse } from "next/server";
import { readCsv } from "utils/utils";

export async function GET(request: NextRequest) {
  const csvFilePath = "./assets/worldcities.csv";
  const cities = await readCsv(csvFilePath);

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
