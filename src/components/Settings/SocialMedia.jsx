import React from 'react'
import {FaFacebook} from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className='socialMedia'>
            <h3>Social Media</h3> 
            <FaFacebook />
            <form>
                <select>
                     <option>Facebook</option>
                </select>
            </form>
        </div>
    )
}
export default SocialMedia;
