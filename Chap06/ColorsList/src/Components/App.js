import React, { useState } from "react";
import colorData from "../data/color-data.json";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";

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
        alert(`Color added: ${title} - ${color}`);
    }

    return (
        <>
            <AddColorForm onNewColor={addColor} />

            <ColorList
                colors={colors}
                onRemoveColor={removeColor}
                onRateColor={rateColor}
            />
        </>
    );
}