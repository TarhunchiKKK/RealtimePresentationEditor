import { CiGrid41 } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IDisplayTypeCheckboxProps } from "./props";
import { displayTypeIconsSize } from "../../constants";
import { DisplayTypes } from "../../enums";

export function DisplayTypeCheckbox({
    current,
    onCheckGrid,
    onCheckRow,
}: IDisplayTypeCheckboxProps) {
    return (
        <div className="inline-flex flex-row justify-between items-center rounded-md overflow-hidden">
            <button
                title={DisplayTypes.Grid}
                onClick={onCheckGrid}
                className={`h-full overflow-hidden rounded-md px-4 py-4 ${
                    current === DisplayTypes.Grid ? "bg-slate-400" : "hover:bg-slate-300"
                }`}
            >
                <CiGrid41 size={displayTypeIconsSize} />
            </button>

            <button
                title={DisplayTypes.Row}
                onClick={onCheckRow}
                className={`h-full overflow-hidden rounded-md px-4 py-4 ${
                    current === DisplayTypes.Row ? "bg-slate-400" : "hover:bg-slate-300"
                }`}
            >
                <RxHamburgerMenu size={displayTypeIconsSize} />
            </button>
        </div>
    );
}
