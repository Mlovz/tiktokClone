import {getDataApi} from '../../utils/Api'


export const PROFILE_TYPES = {
    LOADING: 'GET_LOADING',
    GET_USER: 'GET_USER'
}

export const getProfileUser = (id) => async(dispatch) => {
    try {
        dispatch({type: PROFILE_TYPES.LOADING, payload: true})

        const res = await getDataApi(`user/${id}`, null)
        dispatch({type: PROFILE_TYPES.GET_USER, payload: res.data})

        dispatch({type: PROFILE_TYPES.LOADING, payload: false})
        
    } catch (err) {
        
    }
}