import {React, useState, useEffect} from 'react'
import Coin from './routes/Coin'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Coins = (props) => {
  const [coins, setCoins] = useState([])
  useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins')
      .then(res => {
          setCoins(res.data)
          console.log(res.data)
      }).catch(erorr => console.log(erorr))
  }, [])
  return (
    <div className='flex justify-center '>
      <table className='w-[50%]'>
        <thead>
          <tr>
          <th>#</th>
            <th className='text-left'>Coin</th>
            <th >Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th className='hide-mobile'>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coins) =>(
            <tr className='border-b border-sky-700 hover:bg-sky-700'>
              <td>{coins.market_data.market_cap_rank}</td>
              <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                <td>
                <div className="image_symbol flex items-center">
                  <img className="w-[30px] h-[30px]" src={coins.image.small} alt="crypto" />
                  <p className='ml-2'>{coins.symbol.toUpperCase()}</p>
                </div>
              </td>
              </Link>
              <td>${coins.market_data.current_price.usd.toLocaleString()}</td>
              <td>{coins.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2) < 0 ? ( 
                <p className="coin_change text-[#ea3943] invisible md:visible">{coins.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</p>
                ) : (<p className="coin_change text-[#16c784] invisible md:visible">{coins.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</p>)}</td>
              <td>{coins.market_data.price_change_percentage_24h.toFixed(2) < 0 ? ( 
                <p className="coin_change text-[#ea3943] invisible md:visible">{coins.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                ) : (<p className="coin_change text-[#16c784] invisible md:visible">{coins.market_data.price_change_percentage_24h.toFixed(2)}%</p>)}</td>
              <td>{coins.market_data.price_change_percentage_7d.toFixed(2) < 0 ? ( 
                <p className="coin_change text-[#ea3943] invisible md:visible">{coins.market_data.price_change_percentage_7d.toFixed(2)}%</p>
                ) : (<p className="coin_change text-[#16c784] invisible md:visible">{coins.market_data.price_change_percentage_7d.toFixed(2)}%</p>)}</td>
              
              <td>${coins.market_data.market_cap.usd.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Coins