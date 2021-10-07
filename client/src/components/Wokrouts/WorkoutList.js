import React from 'react'
import { useSelector } from 'react-redux';
import WorkoutItem from './WorkoutItem';
import styled from 'styled-components';
import Button from '../UI/Button';

function WorkoutList({workouts}) {

    const renderedListItems = workouts.map(workout => {
        return <WorkoutItem key={workout.id} workout={workout}/>
    });

    if(workouts.length === 0){
        return <h2 className="workout-list__fallback">운동기록이 없습니다.</h2>;
    }

    const StyledWorkoutList = styled.ul`
        list-style: none;
        margin: 10px 0;
        padding: 0;
    `;

    return (
        <StyledWorkoutList className="workout-list">
            {renderedListItems}
            {/* <Button>더보기 +</Button> */}
        </StyledWorkoutList>
    )
}

export default WorkoutList
