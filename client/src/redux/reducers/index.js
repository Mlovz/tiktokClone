import {combineReducers} from 'redux'
import authModal from './globalReducer'
import auth from './authRedicer'
import alert from './alertReducer'
import profile from './profileReducer'

export default combineReducers({
    authModal,
    auth,
    alert,
    profile
})