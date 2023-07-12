import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
interface IproductsList {
  [key: number]: number;
}
type InitialState = {
  value : IproductsList;
}

let productsList:IproductsList ={}
for(let i=1; i<=9; i++){
  productsList[i] = 0;
}
let initialState:InitialState = {value:productsList}


export const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    addToCart:(state,action:PayloadAction<any>)=>{
      return( 
        value:{
          123:213
        }
      )
    }
  }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
