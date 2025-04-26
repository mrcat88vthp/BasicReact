import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(3);
    return (
        <>
            {createArray(totalStars).map((_arrElement, index) => (

                <Star
                    key={index}
                    selected={selectedStars > index}
                    onSelect={() => setSelectedStars(index + 1)}
                />
            ))}
            <p>{selectedStars} of {totalStars} stars</p>
        </>
    );
}