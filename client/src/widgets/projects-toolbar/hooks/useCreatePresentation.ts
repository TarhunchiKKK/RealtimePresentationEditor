import { useState } from "react";
import { presentationsApi } from "../../../entities/presentations";
import { useAppSelector } from "../../../app";

export function useCreatePresentation() {
    const [createPresentation] = presentationsApi.useCreatePresentationMutation();

    const userId = useAppSelector((state) => state.user.user?.id) || "";

    const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");

    const handleClickButton = () => {
        setTitle("");
        setIsInputVisible((prev) => !prev);
    };

    const handleTitleChange = (value: string) => {
        setTitle(value);
    };

    const handleCreatePresentation = () => {
        setTitle("");
        setIsInputVisible(false);
        createPresentation({ title, user: { id: userId } });
    };

    return {
        isInputVisible,
        title,
        handleTitleChange,
        handleClickButton,
        handleCreatePresentation,
    };
}
