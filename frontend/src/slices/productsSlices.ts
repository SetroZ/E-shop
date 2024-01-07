import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productType } from '../products'
import axios from 'axios'
export interface productsState {
  products: productType[]
  loading: boolean
  error: string
}
// const productsSlice = createSlice({
//   name: 'products',
//   initialState: { products: [], loading: false, error: '' } as productsState,
//   reducers: {
//     request: (state: productsState) => {
//       state.loading = true
//     },
//     success: (state: productsState, action) => {
//       state.loading = false
//       state.products = action.payload
//     },
//     fail: (state, action) => {
//       state.loading = false
//       state.error = action.payload
//     },
//   },
// })

// export const { request, success, fail } = productsSlice.actions
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const { data } = await axios.get('/api/products')
    return data
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: { products: [], loading: false, error: '' } as productsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message as string
    })
  },
})

export const productsReducer = productsSlice.reducer
