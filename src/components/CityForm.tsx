import { FormEvent, useId, useState } from "react";
import { CiSearch } from "react-icons/ci";

type Props = {
  setCity: (city: string) => void;
};

const h = 10;
export default function Form({ setCity }: Props) {
  const cityInputId = useId();
  const [value, setValue] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    const validCityRegexp = /^[\p{L}\d\s-]+$/u;
    if (!value.match(validCityRegexp)) alert("Invalid input");
    else setCity(value);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`flex space-x-4 justify-center border-zinc-600 rounded-full border-solid bg-white px-8 h-12 w-10/12`}
    >
      <div className="flex items-center">
        <CiSearch className="text-gray-600" size={24} />
      </div>
      <div className="w-full flex items-center">
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
            className={`text-gray-600 outline-none leading-12 h-full`}
          />
      </div>
    </form>
  );
}
