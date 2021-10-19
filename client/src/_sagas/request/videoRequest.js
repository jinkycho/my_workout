import axios from 'axios';

export function requestGetVideos(keyword){
    return axios.request({
        method: 'get',
        url: "https://www.googleapis.com/youtube/v3/search?maxResults=10&q=" + keyword + "운동&key=" + process.env.REACT_APP_YOUTUBE_KEY
    })
}