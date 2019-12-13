import React from 'react'
import TextSettings from './TextSettings'
import VideoSettings from './VideoSettings'

const Settings = () => {

    const settingsList = [TextSettings, VideoSettings]

    return (
        <div className='settings'>
            <TextSettings />
        </div>
    )
}

export default Settings
