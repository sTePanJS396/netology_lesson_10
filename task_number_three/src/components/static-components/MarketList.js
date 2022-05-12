import React from 'react'
import { useSelector } from 'react-redux'
import MarketItem from '../repeat-components/MarketItem'

const MarketList = () => {
  const product = useSelector((store) => store.market.products)
  console.log(product);
  return (
    <div className='market-list'>
      <ul className='market-list__ul'>
        {product.map((el, index) => (
          <MarketItem key={index} image={el.image} price={el.price} title={el.name}/>
        ))}
      </ul>
    </div>
  )
}

export default MarketList