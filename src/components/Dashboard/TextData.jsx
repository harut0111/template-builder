import React from 'react'

const TextData = ({elData}) => {
    return (
        <div className='textData'>
            <p>Text Data</p>
            <div dangerouslySetInnerHTML={{ __html: elData && elData.toString('html') }} />
        </div>
)
}

export default TextData
