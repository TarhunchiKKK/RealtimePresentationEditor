import { IActionButtonProps } from "./props";

export function ActionButton({ title, content, onClick }: IActionButtonProps) {
    return (
        <button title={title} onClick={onClick} className="px-1 py-1 rounded-md hover:bg-slate-400">
            {content}
        </button>
    );
}
