import {postDataApi} from '../../utils/Api'
import { GLOBALTYPES } from './globalAction'


export const AUTH_TYPES = {
    LOADING: 'REFRESH_LOADING'
}


export const login = ({data}) => async(dispatch) => {
    try {
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

        const res = await postDataApi('login', data, null)

        if(res.status === 200){
            localStorage.setItem('firstlogin', true)
            dispatch({type: GLOBALTYPES.AUTH_MODAL, payload: false})
        }

        dispatch({type: GLOBALTYPES.AUTH, payload: {
            user: res.data.user,
            token: res.data.access_token
        }})
        
        
        
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: false}})
        
    } catch (err) {
        dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
    }
}

export const logout = () => async(dispatch) => {
    try {
        const res = await postDataApi('logout')
        localStorage.removeItem('firstlogin')
        window.location.href = '/'
    } catch (err) {
        dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
    }
}

export const refreshUser = () => async(dispatch) => {
    const firstlogin = localStorage.getItem('firstlogin')
    if(firstlogin){
        try {
            dispatch({type: AUTH_TYPES.LOADING, payload: true})

            const res = await postDataApi('refresh_token')
            dispatch({type: GLOBALTYPES.AUTH, payload: {
                user: res.data.user,
                token: res.data.access_token
            }})
            
            
            dispatch({type: AUTH_TYPES.LOADING, payload: false})
        } catch (err) {
            dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
        }
    }
    
    
}