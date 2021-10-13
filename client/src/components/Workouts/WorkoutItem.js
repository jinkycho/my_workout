import React, { useState } from 'react'
import WorkoutDate from './WorkoutDate';
import Card from '../UI/Card';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'
import { deleteWorkout } from '../../_actions/actions';
import { useDispatch } from 'react-redux';

function WorkoutItem({workout}) {

    const dispatch = useDispatch();

    const StyledWorkoutItem = styled.li`
        background: #333;
        color: #fff;
        margin-bottom: 10%;
        border-radius: 10px;

        &:nth-child(2n){
            background: #fff;
            color: #333;
        }

        & .workout-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5% 0;
            flex-grow: 1;
        }


        & .workout-item__date{
            padding: 0 3%;
            font-size: 13px;
            font-weight: bold;
            text-align: center;
        }

        & .workout-item__detail div{
            text-align: center;
        }

        & .workout-item__detail h2{
            margin: 0;
            text-align: center;
        }

        & .workout-item__buttons{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 0 3%;
        }

        & .workout-item__buttons button{
            background: none;
            border : none;
            cursor: pointer;
            padding: 5px;
        }

        & .workout-item__icon{
            color: #fff;
        }

        &:nth-child(2n) .workout-item__icon{
            color: #333;
        }
    `;

    const deleteHandler = (workoutId) => {
        dispatch(deleteWorkout(workoutId));
    }

    
    return (
        <StyledWorkoutItem>
            <Card>
                <div className="workout-item">
                    <div className="workout-item__date">
                        <WorkoutDate date={workout.date}/>
                    </div>
                    <div className="workout-item__detail">
                        <h2>{workout.title}</h2>
                        <div>{workout.time}</div>
                    </div>
                    <div className="workout-item__buttons">
                        <button onClick={() => {deleteHandler(workout.id)}}><FontAwesomeIcon icon={faTrashAlt} className="workout-item__icon"/></button>
                        {/* <button><FontAwesomeIcon icon={faEdit} className="workout-item__icon"/></button> */}
                    </div>
                </div>
                    {/* <button onClick={clickHandler}>Change</button>            */}
            </Card>
        </StyledWorkoutItem>
    )
}

export default WorkoutItem
