import { combineReducers } from 'redux';
import workoutsReducer from './workoutsSlice';

const rootReducer = combineReducers({
    workouts : workoutsReducer
})

export default rootReducer;