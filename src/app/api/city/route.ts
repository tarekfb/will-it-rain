// import { parse } from 'csv-parse';
export async function GET(request: Request) {


    const url =
        "https://api.open-meteo.com/v1/forecast?latitude=59.33&longitude=18.07&daily=precipitation_probability_max&timezone=Europe%2FBerlin";
    const res = await fetch(url);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    const data = await res.json()
    return Response.json(data)
}


//    const res = await fetch('https://data.mongodb-api.com/...', {
//         next: { revalidate: 60 }, // Revalidate every 60 seconds
//       })
//       const data = await res.json()

//       return Response.json(data)


    // const csvFilePath = '/assets/worldcities.csv';

    // const readed = parse(csvFilePath);
    // return readed;