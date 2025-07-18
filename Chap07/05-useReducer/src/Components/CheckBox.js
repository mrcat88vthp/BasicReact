import React, {useState, useReducer} from "react";

//khai báo biến
const initialState = { checked: false };

function reducer(state, action) {
    switch (action.type) {
        case 'toggle':
            return {checked: !state.checked};
        default:
            return false;
    }
}

function CheckBox(){
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <>
            <input
                type="checkbox"
                checked={state.checked}
                onChange={() => dispatch({type: 'toggle'})}
            />
            {state.checked ? "Checked" : "Unchecked"}
        </>
    );
}

export default CheckBox;