import { IPresentation } from "../../../entities/presentations";
import { DocumentIcon } from "../../../shared/assets";

export const renderGridPresentation = (presentation: IPresentation) => {
    return (
        <div key={presentation.id} className="flex flex-col justify-between items-center gap-3">
            <div
                key={presentation.id}
                className="px-4 py-3 hover:bg-slate-300 hover:cursor-pointer rounded-md overflow-hidden"
            >
                <img src={DocumentIcon} alt={presentation.title} className="w-32 h-32 rounded-lg" />

                <h5 className="text-center">{presentation.title}</h5>
            </div>
        </div>
    );
};
