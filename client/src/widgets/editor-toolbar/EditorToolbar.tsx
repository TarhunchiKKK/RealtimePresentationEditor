import { LiaRedoSolid, LiaUndoSolid } from "react-icons/lia";
import { BsTypeBold, BsTypeItalic, BsTypeUnderline } from "react-icons/bs";
import {
    RxLetterCaseLowercase,
    RxLetterCaseUppercase,
    RxLetterCaseCapitalize,
} from "react-icons/rx";
import { iconsSize, maxFontSize, minFontSize } from "./constants";
import { Checkbox, Dropdown, NumericInput, ActionButton } from "./ui";
import { useFonts, useFormatting, useHistory, useTextHeading, useTextTransfoms } from "./hooks";

export function EditorToolbar() {
    const { handleUndoAction, handleRedoAction } = useHistory();
    const { textHeading, textHeadingDropdownOptions, handleChangeTextHeading } = useTextHeading();
    const { handleTextUppercase, handleTextLowercase, handleTextCapitalize } = useTextTransfoms();
    const { handleToggleFontWeight, handleToggleFontStyle, handleToggleTextDecoration } =
        useFormatting();
    const {
        fontFamily,
        fontSize,
        availableFontFamilies,
        handleFontFamilyChange,
        handleFontSizeChange,
    } = useFonts();

    return (
        <div className="px-4 py-3 rounded-2xl flex flex-row justify-start items-center gap-3 bg-slate-300">
            <div className="pr-4 border-r-[0.5px] border-r-slate-600 flex flex-row justify-between items-center gap-3">
                <ActionButton
                    title="Undo (Ctrl-z)"
                    content={<LiaUndoSolid size={iconsSize} />}
                    onClick={handleUndoAction}
                />

                <ActionButton
                    title="Redo (Ctrl-y)"
                    content={<LiaRedoSolid size={iconsSize} />}
                    onClick={handleRedoAction}
                />
            </div>

            <div className="pr-4 border-r-[0.5px] border-r-slate-600">
                <Dropdown
                    title="Text heading"
                    value={textHeading}
                    onChange={handleChangeTextHeading}
                    options={textHeadingDropdownOptions}
                />
            </div>

            <div className="pr-4 border-r-[0.5px] border-r-slate-600">
                <Dropdown
                    title="Font family"
                    value={fontFamily}
                    onChange={handleFontFamilyChange}
                    options={availableFontFamilies}
                />
            </div>

            <div className="pr-4 border-r-[0.5px] border-r-slate-600">
                <NumericInput
                    title="Font size"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                    min={minFontSize}
                    max={maxFontSize}
                    step={2}
                />
            </div>

            <div className="pr-4 border-r-[0.5px] border-r-slate-600 flex flex-row justify-between items-center gap-3">
                <Checkbox
                    title="Bold (Ctrl-b)"
                    onCheck={handleToggleFontWeight}
                    content={<BsTypeBold size={iconsSize} />}
                />

                <Checkbox
                    title="Italic (Ctrl-i)"
                    onCheck={handleToggleFontStyle}
                    content={<BsTypeItalic size={iconsSize} />}
                />

                <Checkbox
                    title="Underline (Ctrl-u)"
                    onCheck={handleToggleTextDecoration}
                    content={<BsTypeUnderline size={iconsSize} />}
                />
            </div>

            <div className="flex flex-row justify-between items-center gap-3">
                <Checkbox
                    title="Uppercase (Ctrl-e)"
                    onCheck={handleTextUppercase}
                    content={<RxLetterCaseUppercase size={iconsSize} />}
                />

                <Checkbox
                    title="Lowercase (Ctrl-l)"
                    onCheck={handleTextLowercase}
                    content={<RxLetterCaseLowercase size={iconsSize} />}
                />

                <Checkbox
                    title="capitalize (Ctrl-j)"
                    onCheck={handleTextCapitalize}
                    content={<RxLetterCaseCapitalize size={iconsSize} />}
                />
            </div>
        </div>
    );
}
