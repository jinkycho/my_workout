import React, { useState } from 'react'
import WorkoutList from './WorkoutList';
import WorkoutFilter from './WorkoutFilter';
import WorkoutChart from './WorkoutChart';
import './Workouts.css'

function Workouts(props) {
    const items = props.items;

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHanlder = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const fiteredWorkout = items.filter(workout => {
        return workout.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <div className="workouts-block">
            <div className="workout-block__chart">
                <h3>운동통계</h3>
                <WorkoutFilter selected={filteredYear} onChangeFilter={filterChangeHanlder} />
                <WorkoutChart workout={fiteredWorkout}/>
            </div>

            <div className="workout-block__record">
                <h3>운동기록</h3>
                <WorkoutList items = {fiteredWorkout} />
            </div>
        </div>
    )
}

export default Workouts
