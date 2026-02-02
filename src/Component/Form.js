import React, { useState } from 'react'

const Form = ({ items, setItems }) => {
    const [description, setDescription] = useState('');
    const [quatity, setQuatity] = useState(1);

    const handleSubmit = (e) => {
        if (!description) return;
        e.preventDefault();
        setItems([...items, { description, quatity, packed: false, id: Date.now() }]);
        setDescription('');
        setQuatity(1);
        console.log(items);

    }
    return (
        <div className='main'>
            <h3> What do you want for your 😍 trip ?</h3>
            <select className='' value={quatity} onChange={(e) => setQuatity(e.target.value)}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>{num}</option>
                ))}
            </select>
            <input value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder='Item.....' />

            <button onClick={handleSubmit}>Add Item</button>

        </div>
    )
}

export default Form