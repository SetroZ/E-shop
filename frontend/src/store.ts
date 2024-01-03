import {configureStore , combineReducers , applyMiddleware} from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

const reducer = combineReducers({})



const store = configureStore({reducer,
middleware:[thunk]
})

export default store