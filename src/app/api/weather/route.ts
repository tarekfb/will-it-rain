export async function GET(request: Request) {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=59.33&longitude=18.07&daily=precipitation_probability_max&timezone=Europe%2FBerlin";
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return Response.json(data);
}
