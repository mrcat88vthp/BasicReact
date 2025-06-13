import React from "react";
import { useInput } from "./Hook";
import { useColors } from "./ColorProvider";

export default function AddColorForm_V3() {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder="color title..."
                required
                {...titleProps} // {value: titleProps.value, onChange: titleProps.onChange}
            />

            <input
                type="color"
                required
                {...colorProps} // {value: colorProps.value, onChange: colorProps.onChange}
            />
            <button>Add V3</button>
        </form>
    )
}