import {GLOBALTYPES} from './globalAction'
import {getDataApi, postDataApi} from '../../utils/Api'
import { imageUpload } from '../../utils/ImageUpload';

export const POST_TYPES = {
    LOADING: "CREATE_LOADING",
    GET_LOADING: 'GET_LOADING',
    CREATE_POST: 'CREATE_POST',
    GET_POSTS: 'GET_POSTS'
}


export const createPost = (data, token, history) => async(dispatch) => {
    let media;
    
    try {
        dispatch({type: POST_TYPES.LOADING, payload: true})
        if(data.files.length > 0) media = await imageUpload(data.files)

        const res = await postDataApi('create_post', {
            title: data.title,
            video: media,
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

export const getPosts = (token) => async(dispatch) => {
    try {
        dispatch({type: POST_TYPES.GET_LOADING, payload: true})

        const res = await getDataApi('get_auth_posts', token)
        dispatch({type: POST_TYPES.GET_POSTS, payload: res.data})
        
        
        dispatch({type: POST_TYPES.GET_LOADING, payload: false})
    } catch (err) {
        
    }
}