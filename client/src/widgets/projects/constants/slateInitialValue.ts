import { Descendant } from "slate";

export const slateInitialValue: Descendant[] = [
    {
        type: "paragraph",
        children: [
            {
                text: "A line of react in a paragraph.",
            },
        ],
    },
    {
        type: "shape", // Новый тип элемента для фигур
        shape: "rectangle",
        x: 100,
        y: 100,
        width: 100,
        height: 50,
        rotation: 0,
        children: [{ text: "" }], // Для вставки текста внутри фигуры (опционально)
    },
];
