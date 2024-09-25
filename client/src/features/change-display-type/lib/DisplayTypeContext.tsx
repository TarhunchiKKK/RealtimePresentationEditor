import { createContext, useState } from "react";
import { defaultDisplayType, displayTypeClassNames, renderFunctions } from "../constants";
import { TDisplayTypeContextState } from "../types";
import { DisplayTypes } from "../enums";
import { TDisplayTypeContextProps } from "../types";
import { IPresentation } from "../../../entities/presentations";

const defaultValue: TDisplayTypeContextState = {
    displayType: defaultDisplayType,
    setDisplayType: (_: DisplayTypes) => {},
    renderPresentation: (_: IPresentation) => <></>,
    wrapperClassName: "",
};

export const DisplayTypeContext = createContext<TDisplayTypeContextState>(defaultValue);

export function DisplayTypeContextProvider({ children }: TDisplayTypeContextProps) {
    const [displayType, setDisplayType] = useState<DisplayTypes>(defaultDisplayType);

    const contextValue = {
        displayType,
        setDisplayType,
        renderPresentation: renderFunctions[displayType],
        wrapperClassName: displayTypeClassNames[displayType],
    };

    return (
        <DisplayTypeContext.Provider value={contextValue}>{children}</DisplayTypeContext.Provider>
    );
}
