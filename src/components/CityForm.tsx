import { FormEvent, useId, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ThreeDots } from "react-loader-spinner";
import { enqueueSnackbar } from "notistack";

type Props = {
  setCity: (city: string) => void;
  loading: boolean;
};

export default function Form({ setCity, loading }: Props) {
  const cityInputId = useId();
  const [value, setValue] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    const validCityRegexp = /^[\p{L}\d\s-]+$/u;
    if (!value.match(validCityRegexp))
      enqueueSnackbar("Invalid input", { variant: "error" });
    else setCity(value);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`text-white flex space-x-4 justify-center border-zinc-600 rounded-full border-solid px-8 h-12 w-10/12 bg-opacity-20 bg-gray-100 backdrop-filter backdrop-blur-lg`}
    >
      <div className="flex items-center">
        <CiSearch className="" size={24} />
      </div>
      {loading ? (
        <div className="w-full flex justify-center items-center">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#515151"
            ariaLabel="three-dots-loading"
          />
        </div>
      ) : (
        <div className="w-full flex items-center bg-transparent ">
          <label htmlFor={cityInputId} className="hidden">
            City
          </label>
          <input
            id={cityInputId}
            name="city"
            placeholder="Search city"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className={`placeholder-white text-white outline-none leading-12 h-full bg-transparent`}
          />
        </div>
      )}
    </form>
  );
}
