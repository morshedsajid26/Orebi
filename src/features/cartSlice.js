import { createSlice } from '@reduxjs/toolkit'
import Paginate from '../Components/Layer/Paginate'

const initialState = {
    addToCart: [],
    allProduct: Paginate,
    totalPrice: 0,
    totalQuantity:0,
}



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    
      addToCart: (state, action) => {
        state.value += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addToCart } = cartSlice.actions
  
  export default cartSlice.reducer