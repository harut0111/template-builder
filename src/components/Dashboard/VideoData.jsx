import React from 'react'

const VideoData = ({elData}) => {

    console.log('videoData', elData);
    console.log(elData && `https://www.${elData.provider}/${elData.url}`)
    return (
        <div className='videoData'>
            <iframe title='videFrame' width="320" height="245" src={elData && `https://www.${elData.provider}/${elData.url}`}>
            </iframe>
            {Math.random()}
        </div>
    )
}

const areEqual = (prevProps, nextProps) => {
   
    const prevVal = JSON.stringify(prevProps.elData)
    const nextVal = JSON.stringify(nextProps.elData)

    console.log('prprevValevProps', prevVal);
    console.log('nextVal', nextVal);

    return prevVal === nextVal
}

export default React.memo(VideoData, areEqual)
