import { IButtonProps } from "./props";

export function Button({ content, onClick, isLoading }: IButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-1 rounded-lg text-xl text-white bg-indigo-500 ${
                isLoading ? "cursor-progress opacity-75" : "cursor-pointer"
            }`}
        >
            {content}
        </button>
    );
}
