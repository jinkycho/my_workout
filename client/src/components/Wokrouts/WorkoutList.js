import React from 'react'
import WorkoutItem from './WorkoutItem';
import styled from 'styled-components';
import Button from '../UI/Button';

function WorkoutList(props) {
    if(props.items.length === 0){
        return <h2 className="workout-list__fallback">운동기록이 없습니다.</h2>;
    }

    const StyledWorkoutList = styled.ul`
        list-style: none;
        margin: 10px 0;
        padding: 0;
    `;

    return (
        <StyledWorkoutList className="workout-list">
            {props.items.map((expense) => (
            <WorkoutItem item={expense} key={expense.id} />  
            ))
            }
            {/* <Button>더보기 +</Button> */}
        </StyledWorkoutList>
    )
}

export default WorkoutList
