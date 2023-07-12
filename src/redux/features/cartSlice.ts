import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { products } from '@/app/components/products'
interface IproductsList {
  [key: number]: number;
}
type InitialState = {
  value: IproductsList;
  totalPrice: number;
}

let productsList: IproductsList = {}
for (let i = 1; i <= 9; i++) {
  productsList[i] = 0;
}
let initialState: InitialState = { value: productsList,totalPrice: 0}


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.value[action.payload] += 1
    },
    getTotalCartAmount: (state, action: PayloadAction<any>) => {
      let totalAmount = 0;
      for (const key in state.value) {
        if (state.value[key] !== 0) {
          const product = products.find((p) => p.id === key);
            totalAmount += product.price * state.value[key];
        }
      }
      state.totalPrice = totalAmount;
    },
  }
})

export const { addToCart,getTotalCartAmount } = cartSlice.actions;
export default cartSlice.reducer;
