import path from "path";

export const citiesPath = () => {
  const filePath = path.resolve("./assets/worldcities.csv");
  console.log('filepath is ', filePath)
  console.log('cwd: ', process.cwd())
  return filePath;
};
