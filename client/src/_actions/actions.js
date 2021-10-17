export function addWorkout(workout){
    return{
        type: "workoutAdded",
        payload : workout
    }
}

export function deleteWorkout(workoutId){
    return{
        type: "workoutDeleted",
        payload : workoutId
    }
}
