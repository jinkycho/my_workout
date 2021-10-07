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
// export function loginUser(dataToSubmit){
//     const request = axios.post('api/users/login', dataToSubmit)
//     .then(response => response.data)

//     return{
//         type: LOGIN_USER,
//         payload : request
//     }
// }
