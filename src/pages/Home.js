import React from 'react'
import Coins from '../Coins.js';

import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <p>#</p>
        <p className='coin-name'>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className='hide-mobile'>Volume</p>
        <p className='hide-mobile'>Mkt Cap</p>
      </div>
      {/* <Link to={`/coin/${Coins.id}`} element={<CoinItem />} key={Coins.id}>
        <Coins Coins={Coins} />
      </Link> */}
    </div>
  )
}

export default Home