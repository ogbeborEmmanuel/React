import React, { useState } from 'react'

const PackingList = ({ items, setItems }) => {
    const [shop, setShop] = useState([{ food: "yam", id: 1 }, { food: "bread", id: 2 }, { food: "rice", id: 3 }])
    const deleteShopItem = tem => {
        const shopItem = shop.filter(imhop => imhop.id !== tem.id)
        setShop(shopItem)
    }
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
            <div>
                {shop.map((shopItems) => (
                    <div>

                        <ul>
                            <li>
                                {shopItems.food} <button onClick={() => deleteShopItem(shopItems)}>X</button>
                            </li></ul></div>
                ))}
                <button>clear food</button>
            </div >
        </>

    )
}

export default PackingList