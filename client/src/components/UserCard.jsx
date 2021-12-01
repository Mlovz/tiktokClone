import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import Title from './Title'

const UserCard = ({user,component, children}) => {
    return (
        <div className='usercard'>
            {
                component === 'Link' 
                ? <Link to={`/profile/${user._id}`} className='usercard__item'>
                    <Avatar src={user?.avatar} size='small'/>
                    <div>
                        <Title size={18} fw={600}>{user?.username}</Title>
                        <Title>{user?.fullname}</Title>
                    </div>
                </Link>
                : <div className='usercard__item'>
                    <Avatar src={user?.avatar} size='small'/>
                    <div>
                        <Title size={18} fw={600}>{user?.username}</Title>
                        <Title>{user?.fullname}</Title>
                    </div>
                </div>
            }
           
            {children}
        </div>
    )
}

export default UserCard
