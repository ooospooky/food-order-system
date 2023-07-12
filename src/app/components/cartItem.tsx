import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { removeFromCart,addToCart } from '@/redux/features/cartSlice'

export const CartItem = (props: any) => {
  const { id, name, price, src } = props.data;
  const data = useAppSelector((state) => state.cartSliceReducer.value)
  const dispatch = useDispatch<AppDispatch>()
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
          <button onClick={() => dispatch(removeFromCart(id))}> - </button>
          <p>Amount: {data[id]} </p>
          <button onClick={() => dispatch(addToCart(id))}> + </button>
        </div>
      </div>
    </div>
  );
}
