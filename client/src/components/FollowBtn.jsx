import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GLOBALTYPES } from '../redux/actions/globalAction'
import { follow, unfollow } from '../redux/actions/profileAction'
import Button from './Button'

const FollowBtn = ({user}) => {
    const [onFollow, setOnFollow] = useState(false)
    const dispatch = useDispatch()
    const {auth} = useSelector(state => state)
    
    
    
    useEffect(() => {
        if(auth?.user?.following?.find(item => item?._id === user?._id)){
            setOnFollow(true)
        }
        return () => setOnFollow(false)
    },[auth?.user?.following, user?._id])
    
    
    const handleFollow = () => {
        if(auth.token){
            setOnFollow(true)
            dispatch(follow({user, auth}))
        }else{
            dispatch({type: GLOBALTYPES.AUTH_MODAL, payload: true})
        }
    }
    const handleUnFollow = () => {
        if(auth.token){
            setOnFollow(false)
            dispatch(unfollow({user, auth}))
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
