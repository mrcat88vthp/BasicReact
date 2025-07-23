import React, {memo} from "react";

const Temp = ({name, meow = f => f}) => {
    console.log(`rendering ${name}`);
    return <p>{name}</p>
};

const Cat = memo(Temp, (prevProps, nextProps) => {
    return prevProps.name === nextProps.name
});

export default Cat;