import axios from 'axios'


export const postDataApi = async (url, post, token) => {
    const res = await axios.post(`/api/${url}`, post, {
        headers: {
            Authorization: token
        }
    })
    return res
}



