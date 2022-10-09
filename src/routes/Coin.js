import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'


const Coin = () => {
  const params = useParams()
  const [coin, setCoin] = useState([])

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`
  useEffect(() => {
      axios.get(url).then((res) => {
          setCoin(res.data)
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [])

  return (
    <div>
      <div className='w-[90%] md:w-[70%] m-auto bg-[#26272b] '>
        <div className='flex justify-center mt-2 p-2 rounded bg-white text-black'>
          <span className='font-bold'>{coin.name}</span>
        </div>
        <div className='rounded bg-white text-black mt-10 p-2'>
          <span className='rounded p-1 bg-indigo-500/40'>Rank # {coin.market_cap_rank}</span>
          <div className='flex items-center mt-2'>
            {coin.image ? <img src={coin.image.small} alt='' className='w-[28px] h-[28px]'/> : null}
            <p className='ml-2 font-bold'>{coin.name}</p>
          </div>
          <p className='mt-2 text-[30px]'>{coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}</p>
        </div>
        <div className='rounded bg-white text-black mt-10 p-2'>
          <table className='w-full'>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td className='text-center'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td className='text-center'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td className='text-center'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td className='text-center'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td className='text-center'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</p> : null}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='rounded bg-white text-black mt-10 p-2'>
          <div className='md:flex justify-between gap-5 py-2'>
            <div className='flex-col w-full '>
              <div className='flex justify-between border-b border-black py-2'>
                <h4 className='font-bold'>24 Hour Low</h4>
                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
              </div>
              <div className='flex justify-between border-b border-black py-2'>
                <h4 className='font-bold'>24 Hour High</h4>
                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}                            
              </div>
            </div>
            <div className='flex-col w-full'>
              <div className='flex justify-between border-b border-black py-2'>
                <h4 className='font-bold'>Market Cap</h4>
                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
              </div>
              <div className='flex justify-between border-b border-black py-2'>
                <h4 className='font-bold'>Circulating Supply</h4>
                {coin.market_data ? <p>{coin.market_data.circulating_supply.toLocaleString()}</p> : null}
              </div>
            </div>
          </div>
        </div>
        <div className='rounded bg-white text-black mt-10 p-2'>
          <h3 className='font-bold'>About</h3>
          <p className='mt-5' dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coin.description ? coin.description.en : '')}}>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin