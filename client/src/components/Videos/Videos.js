import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Videos() {
    const [videoItem, setVideoItem] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=workout+routine&key=');
                setVideoItem(response);
            }catch(error){
                console.error(error);
            }               
        }

        fetchData();
    
    }, []);

    return (
        <div>
            video
        </div>
    )
}

export default Videos
