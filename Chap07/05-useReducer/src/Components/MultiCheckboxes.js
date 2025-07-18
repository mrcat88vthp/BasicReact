import React, {useReducer} from "react";

//khai báo biến
const initialState = {
    email: {
        checked: false,
        count: 0
    },
    sms: {
        checked: false,
        count: 0
    },
    facebook: {
        checked: false,
        count: 0
    }
}

//reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'toggle':
            let prev = state[action.name];
            return {
                ...state,
                [action.name]: {
                    checked: !prev.checked,
                    count: prev.count + 1,
                }
            }
        default:
            return state;
    }
}

function MultiCheckboxes() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h3>Notification Settings</h3>
            {
                Object.keys(state).map(key => (       
                    <p key={key}>
                        <input 
                            type = "checkbox"
                            checked = {state[key].checked}
                            onChange={() => dispatch({
                                name: key,
                                type: 'toggle'
                            })}
                        />
                        {key.toUpperCase()} - count {state[key].count}
                        
                    </p>
                ))
            }
        </>
    );
}

export default MultiCheckboxes;