import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Toast from './Toast'

const Alert = () => {
    const dispatch = useDispatch()
    const {alert} = useSelector(state => state)
    
    return (
        <>
            {
                alert.error && <Toast dispatch={dispatch} msg={alert.error} bg='danger'/>
            }
        </>
    )
}

export default Alert
