import React from 'react'

function WorkoutDate(props) {
    const date = props.date;

    const month = date.toLocaleString('en-US', {month: 'short'});
    const day = date.toLocaleString('en-US', { day: '2-digit'});
    const year = date.getFullYear();
    
    return (
    <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
    </div>
    )
}

export default WorkoutDate
