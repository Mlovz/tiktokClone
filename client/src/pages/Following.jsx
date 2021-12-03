import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FollowThumb from '../components/FollowThumb'
import { getAllUsers } from '../redux/actions/profileAction'

const Following = () => {
    const dispatch = useDispatch()
    const {followUser} = useSelector(state => state)

    useEffect(() => {
        if(!followUser.firstLoad){
            dispatch(getAllUsers())
        }
    },[dispatch, followUser.firstLoad])
    
    return (
        <div className='following'>
            {
                followUser.users.map((user, index) => (
                    <FollowThumb key={user._id} user={user} index={index}/>
                ))
            }
        </div>
    )
}

export default Following
