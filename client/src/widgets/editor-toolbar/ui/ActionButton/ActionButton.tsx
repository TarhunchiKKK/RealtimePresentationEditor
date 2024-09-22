import { IActionButtonProps } from "./props";

export function ActionButton({ title, content, onClick }: IActionButtonProps) {
    return (
        <button title={title} onClick={onClick}>
            {content}
        </button>
    );
}
