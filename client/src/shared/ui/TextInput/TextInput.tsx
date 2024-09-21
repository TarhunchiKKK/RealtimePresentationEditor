import { ChangeEvent } from "react";
import { ITextInputProps } from "./props";

export function TextInput({ label, value, onChange, placeholder }: ITextInputProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <>
            <label className="block font-medium">{label}</label>

            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full px-2 py-1 border-none outline-none rounded-md bg-slate-200"
            />
        </>
    );
}
