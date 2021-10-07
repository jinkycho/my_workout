import { createStore } from 'redux';
import rootReducer from '../_reducers/reducers';

let preloadedState;
const persistedWorkoutsString = localStorage.getItem('workouts')

if(persistedWorkoutsString){
  preloadedState = {
    workouts : JSON.parse(persistedWorkoutsString)
  }
}

const store = createStore(rootReducer, preloadedState);

export default store

// const workoutState = [
//     {
//       id: '0',
//       title: '산책',
//       time: '00:50',
//       date: new Date(2020, 7, 14),
//     },
//     { 
//       id: '1', 
//       title: '테니스',
//       time: '00:50',
//       date: new Date(2021, 2, 12) },
//     {
//       id: '2',
//       title: '테니스',
//       time: '01:10',
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: '3',
//       title: '산책',
//       time: '01:50',
//       date: new Date(2021, 5, 12),
//     },
//   ];