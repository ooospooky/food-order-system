"use client"
import React from 'react'
import './page.scss'
import { addToCart } from '@/redux/features/cartSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { useAppSelector } from '@/redux/store'

import { products } from '../components/products'
import { CartItem } from '../components/cartItem'
export default function Cart() {
  // const dispatch = useDispatch<AppDispatch>()
  const data = useAppSelector((state) => state.cartSliceReducer.value)
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {Object.keys(data).map((key: string) => {
          if (data[key] !== 0) {
            const product = products.find((item) => item.id === key);
            if (product) {
              return (
                <CartItem data={product} key={key} />
              );
            }
          }
        })}
      </div>
      page
      <div className="checkout">
          <p> Subtotal: $</p>
          <button > Continue Shopping </button>
        
            {" "}
            Checkout{" "}
        </div>
    </div>

  )
}
