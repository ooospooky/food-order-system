"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import './page.scss'
import { clearCart, getTotalCartAmount } from '@/redux/features/cartSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { useAppSelector } from '@/redux/store'

import { products } from '../components/products'
import { CartItem } from '../components/cartItem'
export default function Cart() {
  const dispatch = useDispatch<AppDispatch>()
  const data = useAppSelector((state) => state.cartSliceReducer.value)
  const totalPrice = useAppSelector(state => state.cartSliceReducer.totalPrice);
  useEffect(() => {
    dispatch(getTotalCartAmount());
  }, []);

  const handleSubmit = () => {
    //  {order:[{"pizza":1},{"pza":2}]}
    let order = {}
    for (let key in data) { //find what user have submit and put in order
      if (data[key] !== 0) {
        let product = products.find((p) => p.id === key);
        if (product) (order as any)[product.name] = data[key]
      }
    }
    if (!localStorage.getItem('order')) { //if no order in local storage yet, create {order:[order]}
      localStorage.setItem('order', JSON.stringify({ order: [order] }));
    } else {//push new oder to order histroy 
      let res: any = localStorage.getItem('order')
      if (res) {
        res = JSON.parse(res);
        res['order'].push(order)
        localStorage.setItem('order', JSON.stringify(res));
      }
    }
    alert("下單成功")
    dispatch(clearCart())
  }
  if (!totalPrice) return (
    <div className="cart checkout">
      <h1 className="cart__h1">購物車中沒有任何商品</h1>
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
        <button onClick={handleSubmit}>下單</button>
      </div>
    </div>

  )
}
