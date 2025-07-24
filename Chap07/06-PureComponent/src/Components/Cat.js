import React from "react";

const Cat = ({name, meow = f => f}) => {
    console.log(`rendering ${name}`);    
    return <p>{name}</p>
};

export default Cat;