import React from 'react'
import Image from 'next/image'
export const CartItem = (props: any) => {
  const { id, name, price, src } = props.data;
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
        {/* <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div> */}
      </div>
    </div>
  );
}
