import { createSlice } from '@reduxjs/toolkit'

interface productListState{
    products:[],
    loading:boolean,
    error: any
}
const productListSlice = createSlice({
  name: 'ProductList',
  initialState: { products: [], loading: false ,errpr:'' } as productListType,
  reducers: {
    request: (state:productListState) => {state.loading=true},
    success: (state:productListState,action) =>{state.loading = false 
    state.products = action.payload
    },
    fail: (state,action) =>{
        state.loading = false
        state.error = action.payload
    }
  },
})
