import { FormEvent, useId, useState } from 'react';
import { getCity } from 'src/utils/api-calls';
import { City } from 'utils/types';

type Props = {
    setCity: (city: City) => void;
}

export default function Form({ setCity }: Props) {
    const cityInputId = useId();
    const [value, setValue] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(value)
        const city = await getCity(value);
        setCity(city);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                <label htmlFor={cityInputId}>City:</label>
                <input id={cityInputId} name="city" placeholder='Stockholm...' type="text" onChange={(e) => setValue(e.target.value)} value={value} />
            </label>
        </form>
    );
}
