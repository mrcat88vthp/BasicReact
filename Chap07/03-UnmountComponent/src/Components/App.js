import React, {useState, useEffect} from "react";
import Keys from "./Keys";

function App(){    
    const [showKeys, setShowKeys] = useState(true);

    return (
        <>
            <button onClick={() => setShowKeys(!showKeys)}>
                {showKeys ? "Unmount Keys Component" : "Mount Keys Component"}
            </button>
            {showKeys && <Keys />}
        </>
    );
}

export default App;