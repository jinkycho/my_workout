import { createSelector } from 'reselect';

export const GET_VEDIOS = "GET_VIDEOS";
const SET_VIDEOS = "SET_VIDEOS";

export const getVideos = (keyword) => ({
    type : GET_VEDIOS,
    keyword
});

export const setVideos = (videos) => ({
    type: SET_VIDEOS,
    payload : videos
});

const initialState= {
    videoList : []
}

export default function videosReducer(state = initialState, action){
    switch(action.type){
        case SET_VIDEOS:{
            const videoData = action.payload;
            return{
                ...state,
                videoList : videoData
            }
        }
        default: {
            return state;
        }
    }
}

const videosInState = (state) => state.videos.videoList;

export const loadVideos = createSelector(videosInState, (video) =>
    Object.values(video)
)

export const videosSelector = createSelector(
    loadVideos,
    videos => videos
)

