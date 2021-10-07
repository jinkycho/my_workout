import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import WorkoutList from './WorkoutList';
import WorkoutFilter from './WorkoutFilter';
import WorkoutChart from './WorkoutChart';
import './Workouts.css'
import store from '../../_store/store';

function Workouts() {
    console.log('state', store.getState());
    const workouts = useSelector(state => state.workouts.workout);
    console.log('workouts', workouts);

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHanlder = selectedYear => {
        setFilteredYear(selectedYear);
    }



    const sortedByDate = (a,b) => {
        let c = new Date(a.date);
        let d = new Date(b.date);
        return c > d ? -1 : 1;
    };

    console.log('sort by date', workouts.sort(sortedByDate));

    const fiteredWorkout = workouts.filter(workout => {
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
                <WorkoutList workouts={fiteredWorkout}/>
            </div>
        </div>
    )
}

export default Workouts
