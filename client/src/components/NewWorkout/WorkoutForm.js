import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import './WorkoutForm.css';
import TimePicker from '../TimePicker/TimePicker';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkout } from '../../_actions/actions';
import store from '../../_store/store';

function WorkoutForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const dispatch = useDispatch();
    const workouts = useSelector(state => state.workouts.workout);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        
        //Latest state snapshot
        //Keeping all scheduled state upadtes in mind
        // setUserInput((prevState) => {
        //     return{ ...prevState, enterTitle: event.target.value};
        // })
    };

    const timeChangeHandler = (time) => {
        setEnteredTime(time);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();

        //새로운 아이디 생성하기
        const workoutId = workouts.map(workout => workout.id);
        const createdWorkoutId = Math.max(...workoutId) + 1;

        if(!enteredTitle || !enteredTime || !enteredDate){
            alert('모든 항목을 입력하셔야 합니다.');
            return;
        }
        const workoutData = {
            id : createdWorkoutId,
            title: enteredTitle,
            time: enteredTime,
            date: new Date(enteredDate)
        };

        //store에 저장할 데이터 dispatch
        dispatch(addWorkout(workoutData));

        //child -> parent props 전달
        //Lifting State Up
        props.onSaveWorkoutData(false);

        //입력된 데이터 초기화
        setEnteredTitle('');
        setEnteredTime('');
        setEnteredDate('');
    };
    
    const cancelHandler = () => {
        props.offAddWorkout(false);
    }


    return (
        <Card>
                <form onSubmit={submitHandler} className="new-workout">
                    <div className="new-workout__controls">
                        <button type="button" onClick={cancelHandler} className="new-workout__cancel">&times;</button>
                        <div className="new-workout__control">
                            <label>날짜</label>
                            <input type="date" value={enteredDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
                        </div>
                        <div className="new-workout__control">
                            <label>운동이름</label>
                            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />                  
                        </div>
                        <div className="new-workout__control">
                            <label>운동시간</label>
                            <TimePicker onTimeHandler={timeChangeHandler}/>
                        </div>
                        <div className="new-workout__actions">
                            <Button type="submit" className="new-workout__submit">추가</Button>
                        </div>
                    </div>
            </form>
        </Card>
        
    )
}

export default WorkoutForm
