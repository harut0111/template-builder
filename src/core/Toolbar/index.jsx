import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

const Toolbar = ({onClick}) => {
    return (
        <div className='toolbar' >
            <MdDeleteForever onClick={onClick} style={{cursor: 'pointer', color: 'red', float: "right"}}/>
        </div>
    )
}

export default Toolbar
