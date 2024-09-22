import { useState } from "react";
import { IColorPickerProps } from "./props";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineFontColors } from "react-icons/ai";
import { TextColors } from "../../../../shared/editor";

export function ColorPicker({ title, onChange, colors }: IColorPickerProps) {
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
            className="relative flex flex-row justify-between items-center gap-1 p-1 rounded-md bg-slate-200"
        >
            <AiOutlineFontColors size={20} color={TextColors.Green} />

            <MdArrowDropDown />
            {isOpen && (
                <ul className="absolute p-3 z-10 w-[108px] top-full right-0 bg-slate-200 rounded-md grid grid-cols-3 gap-3">
                    {colors.map((color, index) => (
                        <li
                            key={index}
                            onClick={() => handleChange(color)}
                            className="w-5 h-5 rounded-full"
                            style={{ backgroundColor: color }}
                        ></li>
                    ))}
                </ul>
            )}
        </button>
    );
}
