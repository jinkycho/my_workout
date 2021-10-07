import React, { useState } from 'react';
import './App.css';
import Workouts from './components/Wokrouts/Workouts';
import NewWorkout from './components/NewWorkout/NewWorkout';
import './App.css'
import Navigation from './components/Header/Navigation';

// const DUMMY_WORKOUTS = [
//   {
//     id: 'e1',
//     title: '산책',
//     time: '00:50',
//     date: new Date(2020, 7, 14),
//   },
//   { 
//     id: 'e2', 
//     title: '테니스',
//     time: '00:50',
//     date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: '테니스',
//     time: '01:10',
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: '산책',
//     time: '01:50',
//     date: new Date(2021, 5, 12),
//   },
// ];

function App() {
  const [workouts, setWorkouts] = useState();

  const addWorkoutHandler = workout =>{
    setWorkouts((prevWorkouts) => {
      return [workout, ...prevWorkouts];
    });
  };

  const deleteWorkoutHandler = id =>{
    setWorkouts(workouts.filter(workout => workout.id !== id));
  }
  
  return (

    <div className="workouts">
      <Navigation />
      <NewWorkout onAddWorkout={addWorkoutHandler}/>
      <Workouts items={workouts} onDeleteWorkout={deleteWorkoutHandler}/>
    </div>
  );
}

export default App;
