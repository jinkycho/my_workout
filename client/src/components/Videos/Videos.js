import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Youtube from 'react-youtube';
import { useSelector } from 'react-redux'; 
import { videoFilters } from '../../_reducers/filterSlice';
import { useDispatch } from 'react-redux';
import { getVideos, videosSelector } from '../../_reducers/videoSlice';

function Videos() {
    const [keyword, setKeyword] = useState('');

    //const videos = useSelector(state => state.videos.videoList);
    const videos = useSelector(videosSelector);
    console.log(videos);

    // useEffect(() => {
    //     async function fetchData(){
    //         try{
    //             const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=운동&key=${process.env.REACT_APP_YOUTUBE_KEY}`);
    //             setVideoItems(response.data.items);
    //         }catch(error){
    //             console.error(error);
    //         }               
    //     }

    //     fetchData();
    
    // }, []);

    const StyledVideopage = styled.div`

        & .video__filter{
            display: flex;
            width: 60%;
            justify-content: space-between;
            margin-bottom: 2rem;
        }

        & .video__filter button{
            display: block;
            padding: 0.3rem 1rem;
            border: 1px solid #ddd;
            border-radius: 15px;
            background: #fff;
            color: #ddd;
            cursor: pointer;
        }

        & .video__filter button.active{
            background: #333;
            color: #fff;
            font-weight: bold;
            border-color: #333;
        }

        & .video__filter button.active:hover{
            color: #fff;
        }



        & .video__filter button:hover{
            border-color: #333;
            color: #333;
        }

        
        & .video__items{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        & .video__item{
            padding: 1rem 0;
        }
    `;
    //Youtube 설정
    const opts = {
        height: '200',
        width: '360'
    }

    const dispatch = useDispatch();

    const loadVideos = (item) => {
        if(item === keyword){
            return;
        }
        //dispatch(getVideos(item));
        setKeyword(item);
    }

    const renderFilters = videoFilters.map((item, index) => {
        return(
            <button onClick={()=> loadVideos(item)} 
                    className= {keyword === item ? 'active' : ''}
                    key={index}>{item}</button>
        )
    })

    const renderVideos = videos.map((item) => {
        return(
            <div className="video__item" key={item.id.videoId}>
                <Youtube videoId={item.id.videoId} opts={opts}/>
            </div>
        )
    }
    ) 


    return (
        <StyledVideopage>
            <h5>관심운동 선택</h5>
            <div className="video__filter">
                {renderFilters}
            </div>
            <div className="video__items">
                {renderVideos}
            </div>
        </StyledVideopage>
    )
}

export default Videos
