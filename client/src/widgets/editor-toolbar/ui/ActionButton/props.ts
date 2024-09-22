export interface IActionButtonProps {
    title?: string;

    content: string | JSX.Element;

    onClick: () => void;
}
