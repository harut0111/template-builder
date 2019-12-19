import React from 'react'

const VideoData = ({elData}) => {

    // console.log('videoData', elData);
    console.log(elData && `https://www.${elData.provider}/${elData.url}`)
    return (
        <div className='videoData'>
            <iframe title='videFrame' width="320" height="245" src={elData && `https://www.${elData.provider}/${elData.url}`}>
            </iframe>
        </div>
    )
}

export default VideoData
