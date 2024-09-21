export interface ITextInputProps {
    label: string;

    value: string;

    onChange: (_: string) => void;

    placeholder?: string;
}
