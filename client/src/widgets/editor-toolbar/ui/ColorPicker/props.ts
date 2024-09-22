export interface IColorPickerProps {
    title?: string;

    onChange: (value: string) => void;

    colors: string[];
}
