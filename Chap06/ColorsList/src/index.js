import React, { createContext} from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import colors from "./data/color-data.json";

export const ColorContext = createContext();

ReactDOM.createRoot(document.getElementById("divRoot")).render(
    <ColorContext.Provider value = {{ colors }}>
    <App />
    </ColorContext.Provider>
);