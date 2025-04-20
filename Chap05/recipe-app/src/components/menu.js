import React from "react";
import Recipe from "./recipe";
import "./Menu.css";

function Menu({ recipes}){
    return (
        <article className="menu">
            <header>
                <h1>Delicious Recipes</h1>                
            </header>
            <div className="recipes">
                {recipes.map((recipe, index) => (
                    <Recipe key={index} {...recipe} />
                ))}
            </div>
        </article>
    );
}

export default Menu;