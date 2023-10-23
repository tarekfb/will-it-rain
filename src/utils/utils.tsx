import { parse } from 'csv-parse';

export function readCsv() {
    const csvFilePath = '/assets/worldcities.csv';

    const readed = parse(csvFilePath);
    console.log(readed);
    return readed;
}