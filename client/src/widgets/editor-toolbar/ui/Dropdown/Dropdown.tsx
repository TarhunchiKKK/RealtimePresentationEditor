import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IDropdownProps } from "./props";

export function Dropdown({ title, value, onChange, options }: IDropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const buttonTitle = isOpen ? undefined : title;

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (selectedValue: string) => {
        onChange(selectedValue);
        setIsOpen(false);
    };

    return (
        <button
            title={buttonTitle}
            onClick={handleOpen}
            className="relative flex flex-row justify-between items-center gap-4 px-2 py-[6px] rounded-md bg-slate-400"
        >
            <span>{value}</span>

            <MdArrowDropDown />
            {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-slate-200 rounded-md">
                    {options
                        .filter((option) => option.value !== value)
                        .map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleChange(option.value)}
                                className="text-start px-2 py-2 border-b-[1px] last:border-b-0 border-b-slate-300"
                            >
                                {option.title}
                            </li>
                        ))}
                </ul>
            )}
        </button>
    );
}
