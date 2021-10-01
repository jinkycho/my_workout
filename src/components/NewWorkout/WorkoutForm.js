import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import './WorkoutForm.css';

function WorkoutForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredTime, setEnteredTime] = useState('00:00:00');
    const [enteredDate, setEnteredDate] = useState('');

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

    const timeChangeHandler = (event) => {
        setEnteredTime(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const workoutData = {
            title: enteredTitle,
            time: enteredTime,
            date: new Date(enteredDate)
        };

        //child -> parent props 전달
        //Lifting State Up
        props.onSaveWorkoutData(workoutData);

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
                            <label>시간</label>
                            <input type="time" value={enteredTime} onChange={timeChangeHandler} />
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
