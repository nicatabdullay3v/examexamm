
import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './Slices/productsSlice'
import BasketSlice from './Slices/BasketSlice'

export default configureStore({
  reducer: {
    products:productsSlice,
    basket:BasketSlice
  }
})