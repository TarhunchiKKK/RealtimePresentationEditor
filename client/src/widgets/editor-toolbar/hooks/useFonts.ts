import { useContext, useMemo, useState } from "react";
import { EditorContext } from "../../../features/editor";
import {
    FontFamilies,
    FontSizes,
    setTextFontFamily,
    setTextFontSize,
} from "../../../shared/editor";
import { defaultFontFamily, defaultFontSize } from "../constants";

export function useFonts() {
    const { editor } = useContext(EditorContext);

    const [fontFamily, setFontFamily] = useState<FontFamilies>(defaultFontFamily);
    const [fontSize, setFontSize] = useState<FontSizes>(defaultFontSize);

    const availableFontFamilies = useMemo(() => {
        return Object.values(FontFamilies).map((value) => ({ title: value, value: value }));
    }, []);

    const handleFontFamilyChange = (newFontFamily: string) => {
        const value = newFontFamily as FontFamilies;
        setFontFamily(value);
        setTextFontFamily(editor, value);
    };

    const handleFontSizeChange = (newFontSize: number) => {
        const value = newFontSize as FontSizes;
        setFontSize(value);
        setTextFontSize(editor, value);
    };

    return {
        fontFamily,
        availableFontFamilies,
        handleFontFamilyChange,
        fontSize,
        handleFontSizeChange,
    };
}
