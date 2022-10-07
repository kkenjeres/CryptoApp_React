import {React, useState, useEffect} from 'react'
import Coin from './routes/Coin'
import axios from 'axios'
import Coins from './Coins'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
export default function App() {
  const [coins, setCoins] = useState([])
  useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false')
      .then(res => {
          setCoins(res.data)
          console.log(res.data)
      }).catch(erorr => console.log(erorr))
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
}

