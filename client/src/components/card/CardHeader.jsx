import React from 'react'
import Avatar from '../Avatar'
import Title from '../Title'
import Text from '../Text'
import FollowBtn from '../FollowBtn'
// import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const CardHeader = ({post}) => {
    // const {auth} = useSelector(state => state)
    
    return (
        <div className='card__header'>
            <div className='card__header__ava'>
                <Avatar src={post.user?.avatar} size='small'/>
                <div className='mx-2'>
                    <Link to={`/profile/${post.user._id}`} className='d-flex align-items-center'>
                        <Title size={17} fw={700}>{post.user?.username}</Title>
                        <Title size={13} fw={500} margin='0 0 0 10px'>{post.user?.fullname}</Title>
                    </Link>
                    <Text txt={post.title} />
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
