import { getWeather } from "utils/api-calls-external";
import MainInfo from "../components/MainInfo";

export default async function Home() {
  const weather = await getWeather();

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-10 w-full">
        <h1 className="text-3xl font-semibold">Will it rain today?</h1>
        <MainInfo weather={weather} />
      </div>
    </div>
  );
}
