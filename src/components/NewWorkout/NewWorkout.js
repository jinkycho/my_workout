import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import Button from '../UI/Button';
import styled from 'styled-components';

function NewWorkout(props) {
    const [isOpen, setIsOpen] = useState(false);
    
    const saveWorkoutDataHandler = (enteredWorkoutData) => {
        const workoutData= {
            ...enteredWorkoutData,
            id: Math.random().toString()
        };
        
        props.onAddWorkout(workoutData);
        setIsOpen(false);
    };

    const StyledNewWork = styled.div`
        background-image: url('image/workout.jpg');
        background-size: 100%;
        background-position: 5px -181px;
        margin: auto;
        padding: 10% 0;
        border-radius: 10px;

        & button{
            display: block;
        }
    `;

    


    return (
        <div className="new-workout">     
            {isOpen ?
                <WorkoutForm 
                onSaveWorkoutData={saveWorkoutDataHandler} offAddWorkout={setIsOpen}/> :
                <StyledNewWork>
                    <Button onClick={() => {setIsOpen(true)}}>운동기록추가 +</Button>
                </StyledNewWork>
            }
        </div>
    )
}

export default NewWorkout
