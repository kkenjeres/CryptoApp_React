import React from 'react'

const CoinItem = (props) => {
  return (
    <div className="coin-row mb-8 p-2 flex items-center justify-between container mx-auto">
    <p>{props.coins.market_cap_rank}</p>
    <div className="image_symbol flex items-center mr-20">
        <img className='w-14 mr-4 flex justify-center' src={props.coins.image} alt="crypto" />
        <p>{props.coins.symbol.toUpperCase()}</p>
    </div>
    <p>${props.coins.current_price.toLocaleString()}</p>
    <p>{props.coins.market_cap}</p>
    {props.coins.price_change_percentage_24h.toFixed(2) < 0 ? (
        <p className="coin_change red">{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
    ) : (<p className="coin_change green">{props.coins.price_change_percentage_24h.toFixed(2)}%</p>)}
</div>
  )
}

export default CoinItem