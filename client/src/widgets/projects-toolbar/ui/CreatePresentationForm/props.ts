export interface ICreatePresentationFormProps {
    title: string;

    onTitleChange: (_: string) => void;

    handleSubmit: () => void;
}
