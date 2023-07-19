import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { removeFromCart, addToCart, getTotalCartAmount } from '@/redux/features/cartSlice'

export const CartItem = (props: any) => {
  const { id, name, price, src } = props.data;
  const data = useAppSelector((state) => state.cartSliceReducer.value)
  const dispatch = useDispatch<AppDispatch>()

  const handlePlus = () => {
    dispatch(addToCart(id))
    dispatch(getTotalCartAmount())
  }
  const handleMinus = () => {
    dispatch(removeFromCart(id))
    dispatch(getTotalCartAmount())
  }
  return (
    <div className="cartItem" key={id}>
      <div className="cartImageWrap">
        <Image src={src} width={400} height={200} alt={name} />
      </div>
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={handleMinus}> - </button>
          <p>Amount: {data[id]} </p>
          <button onClick={handlePlus}> + </button>
        </div>
      </div>
    </div>
  );
}
