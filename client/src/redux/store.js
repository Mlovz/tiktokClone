import {createStore, applyMiddleware} from 'redux'

import {Provider} from 'react-redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export const GlobalProvider = ({children}) => {
    return <Provider store={store}>
        {children}
    </Provider>
}