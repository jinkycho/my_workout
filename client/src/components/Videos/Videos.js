import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Youtube from 'react-youtube';

function Videos() {
    const [videoItems, setVideoItems] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=운동&key=${process.env.REACT_APP_YOUTUBE_KEY}`);
                setVideoItems(response.data.items);
            }catch(error){
                console.error(error);
            }               
        }

        fetchData();
    
    }, []);

    const StyledVideopage = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        
        & .video__item{
            padding: 1rem 0;
        }
    `;
    //Youtube 설정
    const opts = {
        height: '200',
        width: '360'
    }

    const renderVideos = videoItems.map((item) => {
        return(
            <div className="video__item">
                <Youtube videoId={item.id.videoId} opts={opts}/>
            </div>
        )
    }
    ) 


    return (
        <StyledVideopage>
            {renderVideos}
        </StyledVideopage>
    )
}

export default Videos
