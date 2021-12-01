import React, { useState } from 'react'
import Button from './Button'

const FollowBtn = () => {
    const [onFollow, setOnFollow] = useState(false)
    
    const handleFollow = () => {
        setOnFollow(true)
    }
    const handleUnFollow = () => {
        setOnFollow(false)
    }
    
    return (
        <>
            {
                onFollow 
                ? <Button variant='outlined' colorText='#FE2C55' color='#FE2C55' onClick={handleUnFollow}>Отписаться</Button>
                : <Button variant='contained' color='#FE2C55' onClick={handleFollow}>Подписаться</Button>
            }
            
        </>
    )
}

export default FollowBtn
