export interface IDropdownProps {
    title?: string;

    value: string;

    onChange: (value: string) => void;

    options: { title: string; value: string }[];
}
