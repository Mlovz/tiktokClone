import {GLOBALTYPES} from './globalAction'
import {postDataApi} from '../../utils/Api'
import { imageUpload } from '../../utils/ImageUpload';

export const POST_TYPES = {
    LOADING: "CREATE_LOADING",
    CREATE_POST: 'CREATE_POST'
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