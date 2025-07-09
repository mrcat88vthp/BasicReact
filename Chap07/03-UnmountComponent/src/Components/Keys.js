import React, { useState, useEffect } from 'react';
import { format } from 'date-fns'

function Keys() {
    const [, forceRender] = useState();

    useEffect(() => {
        window.addEventListener('keydown', forceRender);
        return () => {
            console.log("Cleanup function. Unmouting component");
            window.removeEventListener('keydown', forceRender);
        };
    }, []);

    useEffect(() => {
        console.log('Fresh render');
    });

    return (        
        <div>
            <h1>Keys Sub Component</h1>
            <h1>Press any key to re-render this component({format(new Date(), 'dd/MM/yyyy HH:mm:ss')})</h1>
            <p>Check the console to see the effect of pressing a key.</p>                   
        </div>        
    );
}

export default Keys;