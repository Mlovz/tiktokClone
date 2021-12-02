import {GLOBALTYPES} from './globalAction'
import {postDataApi} from '../../utils/Api'

export const POST_TYPES = {
    LOADING: "CREATE_LOADING",
    CREATE_POST: 'CREATE_POST'
}


export const createPost = (data, token, history) => async(dispatch) => {
    try {
        dispatch({type: POST_TYPES.LOADING, payload: true})

        const res = await postDataApi('create_post', {
            title: data.title,
            video: data.files,
            isComment: data.comment,
            isPrivate: data.private
        }, token)

        dispatch({type: POST_TYPES.CREATE_POST, payload: res.data})

        dispatch({type: POST_TYPES.LOADING, payload: false})
        
        history.push('/')
    } catch (err) {
        dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
    }
}