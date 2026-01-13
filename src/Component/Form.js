import React, { useState } from 'react'

const Form = () => {
    const [description, setDescription] = useState('');
    const [quatity, setQuatity] = useState(1);
    const handleSubmit = (e) => {
        if (!description) return;
        e.preventDefault();
        const newItem = { description, quatity }
        console.log(newItem);

    }
    return (
        <div>
            <input value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder='Item.....' />
            <input value={quatity} onChange={(e) => setQuatity(e.target.value)} />
            <button onClick={handleSubmit}>Add Item</button>
        </div>
    )
}

export default Form