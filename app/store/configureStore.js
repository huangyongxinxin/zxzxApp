import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'

export default function configureStore(initialState) {

    const middleWare = [thunk, promise, logger]
    const store = createStore(rootReducer, initialState,
        applyMiddleware(...middleWare)
    )
    return store
}