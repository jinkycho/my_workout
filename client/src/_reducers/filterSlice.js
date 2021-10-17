export const videoFilters = ['상체', '하체', '복근', '힙'];
const SET_FILTER = "SET_FILTER";

export const setFilter = (filter, changeType) => ({
    type: SET_FILTER,
    payload : {filter, changeType}
});

const initialState = {
    filter : videoFilters
}

export default function filterReducer(state = initialState, action){
    switch(action.type){
        case SET_FILTER:
            let { filter, changeType } = action.payload;

            switch(changeType){
                case 'added':{
                    return{
                        ...state,
                        filter : [...state.filter, filter]
                    }
                }
                
                case 'removed':{
                    return{
                        ...state,
                        filter : state.filter.filter(
                            (exisitingFilter) => exisitingFilter !== filter
                        )
                    }
                }
                default:{
                    return state;
                }
            }
        default:{
            return state;
        }
    }
}