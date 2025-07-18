import React, { useState } from "react";
import colorData from "../data/color-data.json";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import AddColorForm_V2 from "./AddColorForm_V2";
import AddColorForm_V3 from "./AddColorForm_V3";
import { v4 } from "uuid";

export default function App() {
    const [colors, setColors] = useState(colorData);

    const removeColor = (id) => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
    };

    const rateColor = (id, rating) => {
        const newColors = colors.map(color => (
            color.id === id ? { ...color, rating } : color
        ));

        setColors(newColors);
    };

    const addColor = (title, color) => {
        const newColors = [
            ...colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ];
        setColors(newColors);
    }

    return (
        <>
            <AddColorForm onNewColor={addColor} />
            <AddColorForm_V2 onNewColor={addColor} />
            <AddColorForm_V3 onNewColor={addColor} />

            <ColorList
                colors={colors}
                onRemoveColor={removeColor}
                onRateColor={rateColor}
            />
        </>
    );
}