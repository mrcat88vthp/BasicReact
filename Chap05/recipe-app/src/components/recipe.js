import React from "react";
import IngredientsList from "./ingredientsList";
import Instructions from "./instructions";

export default function Recipe({ name, ingredients, steps}){
    return (
        <section id ={name.toLowerCase().replace(/ /g, "-")}>            
            <h1>{name}</h1>
            <IngredientsList list={ingredients} />
            <Instructions title="Cooking Instrunctions" steps={steps} />
        </section>
    );
}

