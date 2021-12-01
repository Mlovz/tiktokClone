import React, { useState } from 'react'
import Info from '../components/profile/Info'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import Button from '../components/Button'

const Profile = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {auth} = useSelector(state => state)
    const [tab, setTab] = useState(true)
    
    return (
        <div className='profile'>
            <Info auth={auth} dispatch={dispatch} id={id}/>
            <div className="profile__tab d-flex align-items-center justify-content-between">
                <Button onClick={() => setTab(true)} fullWidth variant={tab && 'outlinedBottom'} colorText='#000'>Клипы</Button>
                <Button onClick={() => setTab(false)} fullWidth variant={!tab && 'outlinedBottom'} colorText='#000'>Лайкнул(-а)</Button>
            </div>
            
           
            
        </div>
    )
}

export default Profile
