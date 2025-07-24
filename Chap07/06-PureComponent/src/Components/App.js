import React, { useState, memo, useCallback, useMemo } from 'react';
import MymemoCom from './MymemoCom';
import Cat from './Cat';
import Pure_Component from './Pure_CLassComponent';

const Pure_Cat = memo(Cat, (prevProps, nextProps) => {
    return prevProps.name === nextProps.name
});

const Pure_Cat_v2 = memo(Cat);
const meow = (name) => {
        console.log(`${name} has meowed`);
    };

function App(){
    const [count, setCount] = useState(0);
    const [cats, setCats] = useState(['Bánh quy', 'Bánh đậu xanh', 'Bánh chuối']);  
    
    

    const meowMap = useMemo(() => {
        const result = {};
        cats.map((name, i) => {
            result[name] = ()  => meow(name);
        });
        return result;
    }, [cats, meow]);
    
    return (
        <div>
            {/*<MymemoCom name={count} />*/}
            <MymemoCom name={count} />
            <MymemoCom name="Mr Cat" />
            {
                cats.map((name, i) => (                    
                        //return Cat key={i} name={name} />
                        //return <Pure_Cat key={i} name = {name} meow={meow({name})} />                    
                        <Pure_Cat_v2 key={'Pure_Cat_v2' + i} name={name} meow={meowMap[name]} />
                ))
            }
            <Pure_Component name='Mr Cat' />
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setCats([...cats, prompt('Name a cat')])}>Thêm bánh</button>
        </div>
    )
}

export default App;