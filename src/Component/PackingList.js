import React from 'react'
import Stats from './Stats';

const PackingList = ({ items, setItems }) => {

    const numberOfItems = items.length;
    const numberOfPackedItems = items.filter(item => item.packed).length;
    const percentage = Math.round((numberOfPackedItems / numberOfItems) * 100)
    const deleteTask = item => {
        const filteredList = items.filter(task => task.id !== item.id);
        setItems(filteredList);
    }
    const handleToggle = (id) => {
        const updatedItems = items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item))
        setItems(updatedItems);
        console.log(items);

    }
    return (
        <>
            <div>{items.map(item => <div style={item.packed ? { textDecoration: "line-through" } : {}} key={item.id}><input type="checkbox" value={item.packed} onChange={() => handleToggle(item.id)} />{item.description} {item.quatity}  <button onClick={() => deleteTask(item)}>X</button></div>)}</div>
            <Stats numberOfItems={numberOfItems} numberOfPackedItems={numberOfPackedItems} percentage={percentage} />
        </>

    )
}

export default PackingList