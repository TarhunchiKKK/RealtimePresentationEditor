import { FiPlus, FiMinus } from "react-icons/fi";
import { INumericInputProps } from "./props";

export function NumericInput({ title, value, onChange, step, min, max }: INumericInputProps) {
    const handleDecrement = () => {
        if (value > min) {
            onChange(value - step);
        }
    };

    const handleIncrement = () => {
        if (value < max) {
            onChange(value + step);
        }
    };

    return (
        <label className="flex flex-row justify-between items-center gap-2">
            <button
                title={`-${step}`}
                className={`${value === min ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={handleDecrement}
            >
                <FiMinus />
            </button>

            <input
                title={title}
                type="number"
                className="max-w-12 bg-slate-200 text-center"
                min={min}
                max={max}
                step={step}
                value={value}
                disabled={true}
            />

            <button
                title={`+${step}`}
                className={`${value === max ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={handleIncrement}
            >
                <FiPlus />
            </button>
        </label>
    );
}
