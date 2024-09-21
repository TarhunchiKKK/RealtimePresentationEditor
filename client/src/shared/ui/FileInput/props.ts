export interface IFileInputProps {
    label: string;

    value: File | null;

    onChange: (_: File | null) => void;

    accept?: string;

    placeholder?: string;
}
