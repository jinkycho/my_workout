import React, { useState, useEffect } from 'react';
import './App.css';
import Workouts from './components/Workouts/Workouts';
import NewWorkout from './components/NewWorkout/NewWorkout';
import Videos from './components/Videos/Videos';
import './App.css'
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getVideos } from './_reducers/videoSlice';

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

  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getVideos('상체'));
    //dispatch(getVideos('하체'));
    //dispatch(getVideos('복근'));
    //dispatch(getVideos('힙'));
  }, [])


  
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
