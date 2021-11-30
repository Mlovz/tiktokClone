import React from 'react'

const Avatar = ({src, size}) => {
    return (
        <div className={`avatar ${size}`}>
            <img src={src} alt="" />
        </div>
    )
}

export default Avatar
