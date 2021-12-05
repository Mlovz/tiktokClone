// import { AUTH_TYPES } from './authAction'
import {getDataApi} from '../../utils/Api'
import {GLOBALTYPES} from './globalAction'


export const PROFILE_TYPES = {
    LOADING: 'GET_LOADING',
    GET_USERS_LOADING: 'GET_USERS_LOADING',
    GET_USER: 'GET_USER',
    GET_ALL_USERS: 'GET_ALL_USERS',
    FOLLOW: 'FOLLOW'
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

export const follow = ({user, auth}) => async(dispatch) => {
    const newUser = {...user, followers: [...user.followers, auth.user]}
    dispatch({type: PROFILE_TYPES.FOLLOW, payload: newUser})

    dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
            ...auth,
            user: {
                ...auth.user, following:[...auth.user.following, user]
            }
        }
    })
    
}

export const unfollow = ({user, auth, socket}) => async(dispatch) => {
    const newUser = {...user, followers: user.followers.filter(item => item._id !== auth.user._id)}
    dispatch({type: PROFILE_TYPES.FOLLOW, payload: newUser})

    dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
            ...auth,
            user: {
                ...auth.user, following: auth.user.following.filter(item => item._id !== user._id)
            }
        }
    })
}