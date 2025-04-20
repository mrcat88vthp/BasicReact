import React from "react";
import ReactDom from "react-dom/client";
import Menu from "./components/menu.js";
import data from "./data/recipes.json";

ReactDom.createRoot(document.getElementById("divRoot")).render(
    <Menu recipes={data} />
);