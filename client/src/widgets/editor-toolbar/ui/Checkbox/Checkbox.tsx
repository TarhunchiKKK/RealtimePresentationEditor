import { ChangeEvent } from "react";
import { ICheckboxProps } from "./props";

export function Checkbox({ title, onCheck, content }: ICheckboxProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            onCheck();
        }
    };

    return (
        <label
            title={title}
            className="px-1 py-1 rounded-md bg-slate-200 hover:bg-slate-400 cursor-pointer"
        >
            <input
                type="checkbox"
                defaultChecked={false}
                checked={false}
                onChange={handleChange}
                className="hidden"
            />

            {content}
        </label>
    );
}
