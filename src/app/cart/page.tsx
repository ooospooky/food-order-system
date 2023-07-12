"use client"
import React from 'react'
import Link from 'next/link'
import './page.scss'
import { getTotalCartAmount } from '@/redux/features/cartSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { useAppSelector } from '@/redux/store'

import { products } from '../components/products'
import { CartItem } from '../components/cartItem'
export default function Cart() {
  const dispatch = useDispatch<AppDispatch>()
  dispatch(getTotalCartAmount())
  const data = useAppSelector((state) => state.cartSliceReducer.value)
  const totalPrice = useAppSelector(state => state.cartSliceReducer.totalPrice);
  if(!totalPrice) return(
    <div className="cart checkout">
      <h1 className="cart__h1">購物車中沒有任何商品。</h1>
      <Link href="/"><button>繼續購物</button></Link>
    </div>
  )    
  return (
    <div className="cart">
      <div>
        <h1 className="cart__h1">Your Cart Items</h1>
      </div>
      <div className="cart">
        {Object.keys(data).map((key: string) => {
          if (data[Number(key)] !== 0) {
            const product = products.find((item) => item.id === key);
            if (product) {
              return (
                <CartItem data={product} key={key} />
              );
            }
          }
        })}
      </div>
      <div className="checkout">
          <h2 className="cart__h2 "> Subtotal: ${totalPrice}</h2>
          <Link href="/"><button>繼續購物</button></Link>
          <Link href="/"><button>下單</button></Link>
        </div>
    </div>

  )
}
