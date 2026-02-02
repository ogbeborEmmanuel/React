import React from 'react'
import Stats from './Stats';

const PackingList = ({ items, setItems }) => {

    const numberOfItems = items.length;
    const numberOfPackedItems = items.filter(item => item.packed).length;
    const percentage = Math.round((numberOfPackedItems / numberOfItems) * 100)


    const [sortBy, setSortBy] = React.useState("input");
    let sortedItems;

    const handleClearList = () => {
        const confirmed = window.confirm("Are you sure you want to clear the list?");
        if (confirmed) {
            setItems([]);
        }
    }

    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    const deleteTask = item => {
        const filteredList = items.filter(task => task.id !== item.id);
        setItems(filteredList);
    }
    const handleToggle = (id) => {
        const updatedItems = items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item))
        setItems(updatedItems);
        console.log(items);

    }
    console.log(sortBy);
    return (
        <>
            <div >{sortedItems.map(item => <div style={item.packed ? { textDecoration: "line-through" } : {}} key={item.id}><input type="checkbox" value={item.packed} onChange={() => handleToggle(item.id)} />{item.description} {item.quatity}  <button onClick={() => deleteTask(item)}>X</button></div>)}</div>
            <Stats numberOfItems={numberOfItems} numberOfPackedItems={numberOfPackedItems} percentage={percentage} />
            <div className='actions'>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">
                        sort by input order
                    </option>
                    <option value="description">
                        sort by description
                    </option>
                    <option value="packed">
                        sort by packed status
                    </option>
                </select>
            </div>

            <button onClick={handleClearList}>Clear List</button>
        </>

    )
}

export default PackingList