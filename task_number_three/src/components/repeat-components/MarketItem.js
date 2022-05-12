import React from 'react'

const MarketItem = ({ image, price, title }) => {
  return (
    <li className='market-list__li'>
        <div className='item'>
            <img className='item__img' src={image} alt='Картинка'/>
            <div className='item__span:title'>{title}</div>
            <div className='item__span:price'>{`Цена: ${price}`}</div>
        </div>
    </li>
  )
}

export default MarketItem