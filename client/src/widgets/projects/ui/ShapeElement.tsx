import { RenderElementProps } from "slate-react";

export const ShapeElement = (props: RenderElementProps) => {
    return (
        <div
            {...props.attributes}
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "red",
                position: "absolute",
                top: "50%",
                left: "50%",
                zIndex: -1,
            }}
        >
            {props.children}
        </div>
    );
};
