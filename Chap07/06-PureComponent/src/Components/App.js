import React, { useState } from 'react';
import MymemoCom from './MymemoCom';
import Cat from './Cat';

function App(){
    const [count, setCount] = useState(0);
    const [cats, setCats] = useState(['Bánh quy', 'Bánh đậu xanh', 'Bánh chuối']);

    return (
        <div>
            {/*<MymemoCom name={count} />*/}
            <MymemoCom name="Mr Cat" />
            {
                cats.map((name, i) => (
                    <Cat key={i} name={name} />
                ))
            }
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setCats([...cats, prompt('Name a cat')])}>Thêm bánh</button>
        </div>
    )
}

export default App;