import { IPresentation } from "../../../entities/presentations";
import { DocumentIcon } from "../../../shared/assets";

export const renderRowPresentation = (presentation: IPresentation) => {
    return (
        <div
            key={presentation.id}
            className="px-4 py-2 flex flex-row justify-start items-center gap-5 hover:bg-slate-300 hove:cursor-pointer rounded-sm overflow-hidden"
        >
            <img src={DocumentIcon} alt={presentation.title} className="w-8 h-8 rounded-sm" />

            <span>{presentation.title}</span>
        </div>
    );
};
