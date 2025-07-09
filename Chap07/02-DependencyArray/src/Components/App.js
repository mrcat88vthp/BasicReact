import React, {useState, useEffect} from "react";

function App(){
    const [val, set] = useState('');
    const [phrase, setPhrase] = useState('Ví dụ về phrase');

    const createPhrase = () => {
        setPhrase(val);
        set('');
    }

    useEffect(() => {
        console.log(`typing ${val}`);        
    }, [val]);

    useEffect(() => {
        console.log(`save phrase: ${phrase}`);
    }, [phrase]);

    //Chạy khi val hoặc phrase thay đổi giá trị
    useEffect(() => {
        console.log('val or phrase changed');
        return () => {
            console.log('cleanup function');
        };
    }, [val, phrase]);

    //Chạy khi render lần đầu tiên
    useEffect(() => {
        console.log('only once after initial render');
    }, []);

    return (
        <>
            <label>Favorite phrase: </label>
            <input type = "text"
                value = {val}
                placeholder= {phrase}
                onChange = {e => set(e.target.value)}   
            />

            <button onClick={createPhrase}>Send</button>
        </>
    );
}

export default App;