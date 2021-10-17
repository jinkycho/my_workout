import axios from 'axios';

export function requestGetVideos(keyword){
    console.log(keyword);
    return axios.request({
        method: 'get',
        url: "https://www.googleapis.com/youtube/v3/search?q=" + keyword + "운동&key=" + process.env.REACT_APP_YOUTUBE_KEY
    })
}