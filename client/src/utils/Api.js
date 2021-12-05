import axios from 'axios'


export const postDataApi = async (url, post, token) => {
    const res = await axios.post(`/api/${url}`, post, {
        headers: {
            Authorization: token
        }
    })
    return res
}
export const getDataApi = async (url, token) => {
    const res = await axios.get(`/api/${url}`, {
        headers:{
            Authorization: token
        }
    })
    return res
}
export const patchDataApi = async (url, post, token) => {
    const res = await axios.patch(`/api/${url}`, post, {
        headers:{
            Authorization: token
        }
    })
    return res
}



