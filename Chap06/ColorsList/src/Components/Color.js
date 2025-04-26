import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

export default function Color({ ID, title, color, rating, onRemove = f => f }) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick = {() => onRemove(ID)}>
                <FaTrash />
            </button>
            <div style= {{height: "50px", backgroundColor: color}}></div>
            <StarRating selectedStars={rating} />
            
        </section>
    );
}