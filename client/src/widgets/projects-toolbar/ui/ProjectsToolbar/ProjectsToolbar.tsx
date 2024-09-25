import { IoMdClose } from "react-icons/io";
import { ToolbarButton } from "../../../../shared/ui";
import { useCreatePresentation } from "../../hooks";
import { CreatePresentationForm } from "../CreatePresentationForm";
import { useContext } from "react";
import { DisplayTypeCheckbox } from "../../../../features/change-display-type/ui";
import { DisplayTypeContext } from "../../../../features/change-display-type";
import { DisplayTypes } from "../../../../features/change-display-type/enums";

export function ProjectsToolbar() {
    const {
        isInputVisible,
        title,
        handleTitleChange,
        handleClickButton,
        handleCreatePresentation,
    } = useCreatePresentation();

    const { displayType, setDisplayType } = useContext(DisplayTypeContext);

    return (
        <div className="px-4 py-3 flex flex-row justify-between items-center rounded-lg bg-slate-300">
            {isInputVisible ? (
                <div className="flex flex-row justify-between items-center gap-4">
                    <button onClick={handleClickButton}>
                        <IoMdClose />
                    </button>

                    <CreatePresentationForm
                        title={title}
                        onTitleChange={handleTitleChange}
                        handleSubmit={handleCreatePresentation}
                    />
                </div>
            ) : (
                <ToolbarButton
                    content="+ Project"
                    title="Create Presentation"
                    onClick={handleClickButton}
                />
            )}

            <DisplayTypeCheckbox
                current={displayType}
                onCheckGrid={() => setDisplayType(DisplayTypes.Grid)}
                onCheckRow={() => setDisplayType(DisplayTypes.Row)}
            />
        </div>
    );
}
