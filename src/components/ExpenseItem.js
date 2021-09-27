import React from 'react'

function ExpenseItem(props) {

    const item = props.item;
    console.log(item);

    const month = item.date.toLocaleString('en-US', {month: 'long'});
    const day = item.date.toLocaleString('en-US', { day: '2-digit'});
    const year = item.date.getFullYear();
    return (
        <div>
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div>
                <h2>{item.title}</h2>
                <div>${item.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
