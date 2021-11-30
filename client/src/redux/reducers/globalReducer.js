import {GLOBALTYPES} from '../actions/globalAction'


const globalReducer = (state = false, action) => {
    switch(action.type) {
        case GLOBALTYPES.AUTH_MODAL:
            return action.payload
        default:
            return state
    }
}

export default globalReducer