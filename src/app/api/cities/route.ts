import { NextResponse } from 'next/server';
import { SlimCity } from 'src/utils/types';
import { readCsv } from 'src/utils/utils';

export async function GET() {
  const csvFilePath = "./assets/worldcities.csv";
  const cities = await readCsv(csvFilePath);

  const cityNames: SlimCity[] = cities.map(city => ({ id: city.id, city: city.city }));
  if (cityNames.length === 0) return NextResponse.json({ error: `Unable to get cities` }, { status: 500 })
  
  return Response.json(cityNames)
}

