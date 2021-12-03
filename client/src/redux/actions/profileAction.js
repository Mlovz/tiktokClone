import {getDataApi} from '../../utils/Api'
import {GLOBALTYPES} from './globalAction'


export const PROFILE_TYPES = {
    LOADING: 'GET_LOADING',
    GET_USERS_LOADING: 'GET_USERS_LOADING',
    GET_USER: 'GET_USER',
    GET_ALL_USERS: 'GET_ALL_USERS'
}

export const getProfileUser = (id) => async(dispatch) => {
    try {
        dispatch({type: PROFILE_TYPES.LOADING, payload: true})

        const res = await getDataApi(`user/${id}`, null)
        dispatch({type: PROFILE_TYPES.GET_USER, payload: res.data})

        dispatch({type: PROFILE_TYPES.LOADING, payload: false})
        
    } catch (err) {
        dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
    }
}


export const getAllUsers = () => async(dispatch) => {
    try {
        dispatch({type: PROFILE_TYPES.GET_USERS_LOADING, payload: true})

        const res = await getDataApi(`users`, null)
        console.log(res);
        dispatch({type: PROFILE_TYPES.GET_ALL_USERS, payload: res.data})

        dispatch({type: PROFILE_TYPES.GET_USERS_LOADING, payload: false})
    } catch (err) {
        dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
    }
}