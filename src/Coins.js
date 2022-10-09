import {React, useState, useEffect} from 'react'
import Coin from './routes/Coin'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Coins = () => {
  const [coins, setCoins] = useState([])
  const [query, setQuery] = useState([])

  useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins')
      .then(res => {
          setCoins(res.data)
      }).catch(erorr => console.log(erorr))
  }, [])
  return (
    <div className='text-center'>
      <input type="text" placeholder='Search' className='w-[50%] p-4 h-[20px] text-black mt-2 rounded' onChange={e => setQuery(e.target.value)}/>
      <table className='w-[50%] mt-10 m-auto'>
        <thead>
          <tr>
            <th className='text-left'>#</th>
            <th className='text-left'>Coin</th>
            <th className='text-center'>Price</th>
            <th className='text-center'>1h %</th>
            <th className='text-center'>24h %</th>
            <th className='text-center'>7d %</th>
            <th className='text-right'>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.filter((coin)=>coin.symbol.toLowerCase().includes(query) || coin.id.toLowerCase().includes(query)).map((coin) =>(
            <tr className='border-b border-sky-700 hover:bg-sky-700' key={coin.id}>
              <td className='text-left'>{coin.market_data.market_cap_rank}</td>
              <td>
                <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                  <div className="flex items-center">
                    <img className="w-[30px] h-[30px]" src={coin.image.small} alt="crypto" />
                    <p className='ml-2'>{coin.symbol.toUpperCase()}</p>
                  </div>
                </Link>
              </td>
              <td className='text-center'>${coin.market_data.current_price.usd.toLocaleString()}</td>
              <td className='text-center'>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2) < 0 ? ( 
                <p className="coin_change text-[#ea3943] invisible md:visible">{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</p>
                ) : (<p className="coin_change text-[#16c784] invisible md:visible">{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</p>)}</td>
              <td className='text-center'>{coin.market_data.price_change_percentage_24h.toFixed(2) < 0 ? ( 
                <p className="coin_change text-[#ea3943] invisible md:visible">{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                ) : (<p className="coin_change text-[#16c784] invisible md:visible">{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>)}</td>
              <td className='text-center'>{coin.market_data.price_change_percentage_7d.toFixed(2) < 0 ? ( 
                <p className="coin_change text-[#ea3943] invisible md:visible">{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
                ) : (<p className="coin_change text-[#16c784] invisible md:visible">{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>)}</td>
              
              <td className='text-right'>${coin.market_data.market_cap.usd.toLocaleString()}</td>

            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Coins