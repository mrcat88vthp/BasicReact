import React, { useState, useEffect, useMemo } from 'react';

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

const arr_out_func = [1, 2, 3];

function Temp({ children = '' }) {
    useAnyKeyToRender();

    const words = useMemo(() => {
        const words = children.split(' ');
        return words;
    }, [children]);

    useEffect(() =>{
        console.log('Fresh render');
    }, [words]);

    return(
        <>
            <p>{ children }</p>
            <p>
                <strong>{words.length} - words</strong>
            </p>
        </>
    );
}

export default function WordCount(){
    return (        
        <Temp>You are not going to believe this but ...</Temp>
    );
};