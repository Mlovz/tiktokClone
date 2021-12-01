import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from './UserCard'

const SearchModal = ({users}) => {
    const {auth} = useSelector(state => state)
    
    return (
        <div className='search__modal'>
            {
                users.map(user => (
                    <UserCard key={user._id} user={user} component='Link'/>
                ))
            }
            
        </div>
    )
}

export default SearchModal
