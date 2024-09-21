import { ChangeEvent, useState } from "react";
import { IFileInputProps } from "./props";
import { GrPowerReset } from "react-icons/gr";

export function FileInput({ label, value, accept, onChange, placeholder }: IFileInputProps) {
    const [text, setText] = useState<string>(placeholder ?? "");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            onChange(e.target.files[0]);
            setText(e.target.files[0].name);
        } else {
            onChange(null);
            setText(placeholder ?? "");
        }
    };

    const handleReset = () => {
        onChange(null);
        setText(placeholder ?? "");
    };

    return (
        <>
            <label className="block font-medium">{label}</label>

            <div className="flex flex-row justify-between items-center gap-4">
                <label className="block w-full h-8 px-2 py-1 overflow-hidden relative border-none outline-none rounded-md bg-slate-200">
                    <input
                        type="file"
                        accept={accept}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="hidden"
                    />

                    <span className={`${value ? "" : "text-gray-400"}`}>{text}</span>
                </label>

                {value && (
                    <button title="Reset" onClick={handleReset}>
                        <GrPowerReset size={20} />
                    </button>
                )}
            </div>
        </>
    );
}
