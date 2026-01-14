import React from 'react'

const PackingList = ({ items }) => {
    return (
        <div>PackingList = {items.map(item => <div key={item.id}>{item.description} {item.quatity}</div>)}</div>
    )
}

export default PackingList