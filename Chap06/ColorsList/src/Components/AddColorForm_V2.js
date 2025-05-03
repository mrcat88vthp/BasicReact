import React, { useState } from 'react';

export default function AddColorForm_V2({ onNewColor }) {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('#000000');

    const submit = (e) => {
        e.preventDefault();
        onNewColor(title, color);
        setTitle('');
        setColor('');
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder='Color title...'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
            />
            <button>Add v2</button>
        </form>
    );
}