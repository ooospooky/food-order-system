"use client"
import React, { useState, useEffect } from 'react'
import './page.scss'
interface ILocalStorageData {
  order: IorderItem[];
}
interface IorderItem {
  [itemName: string]: number;
}
export default function History() {
  const [localStorageData, setLocalStorageData] = useState<ILocalStorageData | null>(null);
  useEffect(() => {
    const data = localStorage.getItem('order');
    if (data) {
      setLocalStorageData(JSON.parse(data));
    }
  }, []);
  const handleClearOrder = () => {
    localStorage.removeItem('order');
    setLocalStorageData(null);
  }
  if (!localStorageData) {
    return (
      <div><h1 className='history__h1'>There Is No Order History</h1></div>
    )
  }
  return (
    <div className='history'>
      <h1 className='history__h1'>Order History</h1>
      {localStorageData['order'].map((data: IorderItem, index: number) => {
        return (
          <div key={index + 1} className='order'>
            <h2 className='order__h2'>Order #{index + 1}</h2>
            {Object.entries(data).map(([itemName, itemCount]) => (
              <div key={itemName} className='order__product'>
                <p >-- {itemName}</p>
                <p>x {itemCount}</p>
              </div>
            ))}
          </div>
        );
      })}
      <button onClick={handleClearOrder} className='history__btn' >Clear Order History</button>
    </div>
  )
}

