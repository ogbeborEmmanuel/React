import React from 'react'

const Stats = ({ numberOfItems, numberOfPackedItems, percentage }) => {
    return (
        <div>
            <em>{percentage === 100 ? "You have packed all items🚀!" : `You have packed ${numberOfPackedItems} out of ${numberOfItems} items (${percentage}%)`}</em>
        </div >
    )
}

export default Stats