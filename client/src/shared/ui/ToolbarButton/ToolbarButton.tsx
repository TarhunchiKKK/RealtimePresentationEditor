import { IToolbarButtonProps } from "./props";

export function ToolbarButton({ title, content, onClick }: IToolbarButtonProps) {
    return (
        <button
            title={title}
            onClick={onClick}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-300"
        >
            {content}
        </button>
    );
}
