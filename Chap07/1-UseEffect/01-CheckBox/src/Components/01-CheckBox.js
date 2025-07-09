import React, {useState, useEffect} from "react";

function CheckBox(){
    const [checked, setChecked] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            //alert(`Checked cc: ${checked}`);
            console.log(`Checked: ${checked}`);
        }, 0);
        
        // Cleanup function to clear the timer
        return () => clearTimeout(timer);    
    });
    
    //alert(`Checked: ${checked.toString()}`);

    return (
        <>
            <input type="checkbox"
                checked = {checked}
                onChange={() => setChecked(prev => !prev)}
            />  
            {checked ? 'Checked' : 'Not checked'}
        </>
    );
}

export default function App() {
    return <CheckBox />    
};