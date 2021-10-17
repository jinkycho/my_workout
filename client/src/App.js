import React, { useState, useEffect } from 'react';
import './App.css';
import Workouts from './components/Workouts/Workouts';
import NewWorkout from './components/NewWorkout/NewWorkout';
import Videos from './components/Videos/Videos';
import './App.css'
import Navigation from './components/Header/Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <Router>
      <Navigation />
      <Switch>
          <Route exact path="/">
            <NewWorkout onAddWorkout={addWorkoutHandler}/>
            <Workouts items={workouts} onDeleteWorkout={deleteWorkoutHandler}/>
          </Route>
          <Route path="/:videos">
            <Videos />
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
