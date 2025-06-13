import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import ColorProvider from "./Components/ColorProvider";

ReactDOM.createRoot(document.getElementById("divRoot")).render(
    <ColorProvider>
    <App />
    </ColorProvider>
);