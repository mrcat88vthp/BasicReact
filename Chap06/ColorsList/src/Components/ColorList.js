import React from "react";
import Color from "./Color";

export default function ColorList({ colors = [], onRemoveColor = f => f, onRateColor = f => f }) {
    if (!colors.length) {
        return <dvi>No Color listed. (Add color)</dvi>
    }
    return (
        <div> 
            {
                colors.map((color, index) => (
                    <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor}/>
                ))
            }
        </div>
    );
}