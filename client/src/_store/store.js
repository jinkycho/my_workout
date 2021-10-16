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