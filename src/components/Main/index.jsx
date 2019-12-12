import React from 'react'
import './Style/index.scss'
import Dashboard from '../Dashboard'
import Menu from '../Menu'

const Main = () => {
    return (
        <div className='main'>
            <Dashboard />
            <Menu />
        </div>
    )
}

export default Main
