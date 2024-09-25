import { ChangeEvent, FormEvent } from "react";
import { ICreatePresentationFormProps } from "./props";

export function CreatePresentationForm({
    title,
    onTitleChange,
    handleSubmit,
}: ICreatePresentationFormProps) {
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onTitleChange(e.target.value);
    };
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter project name"
                className="rounded-md border-none outline-none px-2 py-1"
            />
        </form>
    );
}
