import { useContext, useMemo, useState } from "react";
import { defaultTextHeading } from "../constants";
import { EditorContext } from "../../../features/editor";
import { setTextHeading, TextHeadings } from "../../../shared/editor";

export function useTextHeading() {
    const { editor } = useContext(EditorContext);

    const [heading, setHeading] = useState<TextHeadings>(defaultTextHeading);

    const textHeadingDropdownOptions = useMemo(() => {
        return Object.values(TextHeadings).map((value) => ({
            title: value,
            value: value,
        }));
    }, []);

    const handleChangeTextHeading = (newTextHeading: string) => {
        const newValue = newTextHeading as TextHeadings;
        setHeading(newValue);
        setTextHeading(editor, newValue);
    };

    return {
        textHeading: heading,
        textHeadingDropdownOptions,
        handleChangeTextHeading,
    };
}
