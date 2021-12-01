import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import Title from './Title'

const UserCard = ({user,component,index, onClick, children}) => {
    return (
        <motion.div
            initial={{opacity: 0, x: '10px'}}
            animate={{opacity: 1, x: '0',transition: {delay: `0.${index}`}}}
            exit={{opacity: 0, x: '10px'}}
            className='usercard'>
            {
                component === 'Link' 
                ? <Link onClick={onClick} to={`/profile/${user._id}`} className='usercard__item'>
                    <Avatar src={user?.avatar} size='small'/>
                    <div style={{
                        marginLeft: '5px'
                    }}>
                        <Title size={16} fw={700}>{user?.username}</Title>
                        <Title size={14} fw={500}>{user?.fullname}</Title>
                    </div>
                </Link>
                : <div onClick={onClick} className='usercard__item'>
                    <Avatar src={user?.avatar} size='small'/>
                    <div>
                        <Title size={18} fw={600}>{user?.username}</Title>
                        <Title>{user?.fullname}</Title>
                    </div>
                </div>
            }
           
            {children}
        </motion.div>
    )
}

export default UserCard
