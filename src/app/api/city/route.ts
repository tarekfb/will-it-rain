import { parse } from "csv-parse";
export async function GET(request: Request) {
  const csvFilePath = "/assets/worldcities.csv";
  // how do i make it take a url

  
  const records = [];
  // Initialize the parser
  const parser = parse({
    delimiter: ",",
  });
  // Use the readable stream api to consume records
  parser.on("readable", function () {
    let record;
    while ((record = parser.read()) !== null) {
      records.push(record);
    }
  });
  // Catch any error
  parser.on("error", function (err) {
    console.error(err.message);
  });
  return parser;
}

//    const res = await fetch('https://data.mongodb-api.com/...', {
//         next: { revalidate: 60 }, // Revalidate every 60 seconds
//       })
//       const data = await res.json()

//       return Response.json(data)

// const csvFilePath = '/assets/worldcities.csv';

// const readed = parse(csvFilePath);
// return readed;
