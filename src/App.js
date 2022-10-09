import {React, useState, useEffect} from 'react'
import Coin from './routes/Coin'
import Coins from './Coins'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Categories from './pages/Categories'
export default function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins />} />
        <Route path='/categories' element={<Categories />}/>
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
}

