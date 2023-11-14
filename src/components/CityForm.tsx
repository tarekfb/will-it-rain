import { FormEvent, useId, useState } from "react";
import { getCity } from "src/utils/api-calls-internal";
import { getErrorMessage } from "src/utils/utils";
import { City } from "utils/types";

type Props = {
  setCity: (city: City) => void;
};

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
      <label>
        <label htmlFor={cityInputId}>City:</label>
        <input
          id={cityInputId}
          name="city"
          placeholder="Stockholm..."
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </label>
    </form>
  );
}
