export interface INumericInputProps {
    title?: string;

    value: number;

    onChange: (value: number) => void;

    min: number;

    max: number;

    step: number;
}
