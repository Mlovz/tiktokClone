import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FollowThumb from '../components/FollowThumb'
import Spinner from '../components/Spinner'

const Following = () => {
    const dispatch = useDispatch()
    const {followUser, auth} = useSelector(state => state)

    
    
    return (
        <div className='following'>
            {
                followUser.loading ? 
                    <Spinner/>
                :
                    followUser.users?.filter(user => user._id !== auth.user?._id).map((user, index) => (
                        <FollowThumb key={user._id} user={user} index={index}/>
                    ))
                
            }
        </div>
    )
}

export default Following
