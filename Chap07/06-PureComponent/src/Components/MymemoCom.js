import React from 'react';

const MymemoCom = React.memo(function MyComponent({ name }){
    console.log('memoCom rendered');
    return <h2>Hello {name}</h2>
});

export default MymemoCom;