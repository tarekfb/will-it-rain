import { FormEvent, useId, useState } from "react";
import { getCity } from "src/utils/api-calls-internal";
import { getErrorMessage } from "src/utils/utils";
import { City } from "utils/types";
import { CiSearch } from "react-icons/ci";

type Props = {
  setCity: (city: City) => void;
};

const h = 12;
export default function Form({ setCity }: Props) {
  const cityInputId = useId();
  const [value, setValue] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const city = await getCity(value);
      setCity(city);
    } catch (error) {
      alert(getErrorMessage(error));
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div
        className={`flex space-x-4 justify-center border-zinc-600 rounded-full border-solid bg-white px-8 h-${h}`}
      >
        <div className="flex items-center">
          <CiSearch className="text-gray-600" size={24} />
        </div>
        <div>
          <label>
            <label htmlFor={cityInputId} className="hidden">
              City
            </label>
            <input
              id={cityInputId}
              name="city"
              placeholder="Search for a city"
              type="text"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              className={`text-gray-600 outline-none h-full leading-${h} w-48`}
            />
          </label>
        </div>
      </div>
    </form>
  );
}
