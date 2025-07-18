import React, { useState, useEffect, useCallback } from 'react';

function useAnyKeyToRender() {
    const [, forceRender] = useState();

    useEffect(() => {
        window.addEventListener('keydown', forceRender);
        return () => {
            console.log("Cleanup function. Unmouting component");
            window.removeEventListener('keydown', forceRender);
        };
    }, []);
}

function Callback() {
    useAnyKeyToRender();

    const fn = useCallback(() => {
        console.log('Callback function executed');
    }, []);

    useEffect(() =>{
        console.log('Fresh render');
    }, [fn]);

    return(
        <>
            <p>Press key</p>
        </>
    );
};

export default Callback;