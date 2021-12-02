import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GLOBALTYPES } from '../redux/actions/globalAction'
import Button from './Button'

const FollowBtn = () => {
    const [onFollow, setOnFollow] = useState(false)
    const dispatch = useDispatch()
    const {auth} = useSelector(state => state)
    
    const handleFollow = () => {
        if(auth.token){
            setOnFollow(true)
        }else{
            dispatch({type: GLOBALTYPES.AUTH_MODAL, payload: true})
        }
    }
    const handleUnFollow = () => {
        if(auth.token){
            setOnFollow(false)
        }else{
            dispatch({type: GLOBALTYPES.AUTH_MODAL, payload: true})
        }
        
    }
    
    return (
        <>
            {
                onFollow 
                ? <Button variant='outlined' colorText='#FE2C55' color='#FE2C55' padding='3px 10px' onClick={handleUnFollow}>Отписаться</Button>
                : <Button variant='contained' color='#FE2C55'  padding='3px 10px' onClick={handleFollow}>Подписаться</Button>
            }
            
        </>
    )
}

export default FollowBtn
