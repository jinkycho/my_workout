import { combineReducers } from 'redux';
import videosReducer from './videoSlice';
import workoutsReducer from './workoutsSlice';
import filterReducer from './filterSlice';

const rootReducer = combineReducers({
    workouts : workoutsReducer,
    videos : videosReducer,
    filters : filterReducer
})

export default rootReducer;