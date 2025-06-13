import React from "react";
import Star from "./Star";
import {createArray}  from "./lib";

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = f => f }) {
    return (
        <>
            {createArray(totalStars).map((_arrElement, index) => (
                <Star
                    key={index}
                    selected={selectedStars > index}
                    onSelect={() => onRate(index + 1)}
                />
            ))}
            <p>{selectedStars} of {totalStars} stars</p>
        </>
    );
}