import React from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
    return (
        <>
            {createArray(totalStars).map((_arrElement, index) => (
                <Star
                    key={index}
                    selected={selectedStars > index}
                />
            ))}
            <p>{selectedStars} of {totalStars} stars</p>
        </>
    );
}