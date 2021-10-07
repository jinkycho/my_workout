import * as actions from '../_actions/types';

const workoutState = {
     workout: [
      {
        id: 0,
        title: '산책',
        time: '00:50',
        date: new Date(2020, 7, 14),
      },
      { 
        id: 1, 
        title: '테니스',
        time: '00:50',
        date: new Date(2021, 2, 12) },
      {
        id: 2,
        title: '테니스',
        time: '01:10',
        date: new Date(2021, 2, 28),
      },
      {
        id: 3,
        title: '산책',
        time: '01:50',
        date: new Date(2021, 5, 12),
      }
    ]
  }

  
export default function workoutReducer(state = workoutState, action){
    switch (action.type) {
        case actions.WORKOUT_ADDED: 
            const workoutData = action.payload;
            return {
                ...state,
                workout : [...state.workout, workoutData]
            };
        case actions.WORKOUT_DELETED:
          // const newWorkout = {...state.workout};
          // console.log('new workout', newWorkout);
          // delete newWorkout[action.payload];
            return{
              ...state,
              workout : [...state.workout.filter(item => item.id !== action.payload)]
            }
        default:
            return state;
    }
}