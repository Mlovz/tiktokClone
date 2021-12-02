import React from 'react'
import Avatar from '../Avatar'
import Title from '../Title'
import FollowBtn from '../FollowBtn'
import { useSelector } from 'react-redux'

const CardHeader = ({post}) => {
    const {auth} = useSelector(state => state)
    
    return (
        <div className='card__header'>
            <div className='card__header__ava'>
                <Avatar src={post.user?.avatar} size='small'/>
                <div>
                    <Title size={17} fw={700}>{post.user?.username}</Title>
                    <Title size={13} fw={500}>{post.user?.fullname}</Title>
                </div>
            </div>
            <div>
                {/* {
                    auth.user._id !== post.user._id && <FollowBtn/>
                } */}
                <FollowBtn/>
            </div>
            
        </div>
    )
}

export default CardHeader
