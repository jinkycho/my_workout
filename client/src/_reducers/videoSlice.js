export const GET_VEDIOS = "GET_VIDEOS";
const SET_VIDEOS = "SET_VIDEOS";

export const getVideos = () => ({
    type : GET_VEDIOS
});

export const setVideos = (videos) => ({
    type: SET_VIDEOS,
    payload : videos
});

const initialState= {
    videoList : []
}

export default function videoReducer(state = initialState, action){
    switch(action.type){
        case SET_VIDEOS:
            return{
                ...state, 
                videoList : [...state.videoList, action.payload]
            }
        default: {
            return state;
        }
    }
}

