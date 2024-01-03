import {
  configureStore,
  combineReducers,

} from '@reduxjs/toolkit'
import { productsReducer } from './slices/productsSlices'
const reducer = combineReducers({ products: productsReducer })

const store = configureStore({ reducer })

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
