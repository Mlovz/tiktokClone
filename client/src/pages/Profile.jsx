import React from 'react'
import Info from '../components/profile/Info'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'

const Profile = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {auth} = useSelector(state => state)
    
    return (
        <div className='profile'>
            <Info auth={auth} dispatch={dispatch} id={id}/>
        </div>
    )
}

export default Profile
