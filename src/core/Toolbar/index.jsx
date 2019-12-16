import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

const Toolbar = ({className, onClick}) => {
    return (
        <div className={className} >
            {/* <MdModeEdit /> */}
            <MdDeleteForever onClick={onClick} style={{cursor: 'pointer', color: 'red'}}/>
        </div>
    )
}

export default Toolbar
