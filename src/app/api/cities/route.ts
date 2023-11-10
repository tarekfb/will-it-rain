import { NextResponse } from 'next/server';
import { citiesPath } from 'utils/constants';
import { SlimCity } from 'utils/types';
import { readCsv } from 'utils/read-csv';

export async function GET() {
  const cities = await readCsv(citiesPath(process.env.NODE_ENV));

  const cityNames: SlimCity[] = cities.map(city => ({ id: city.id, city: city.city }));
  if (cityNames.length === 0) return NextResponse.json({ error: `Unable to get cities` }, { status: 500 })
  
  return Response.json(cityNames)
}

