import React, { useContext } from "react";
import Color from "./Color";
import { useColors } from "./ColorProvider";


export default function ColorList() {
    const { colors } = useColors();
    if (!colors.length) {
        return <dvi>No Color listed. (Add color)</dvi>
    }
    return (
        <div>
            {
                colors.map((color, index) => (
                    <Color key={color.id} {...color} />
                ))
            }
        </div>
    );
}