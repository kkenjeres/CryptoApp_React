import {React, useState, useEffect} from 'react'
import axios from 'axios'

const Categories = () => {
  const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/categories')
        .then((res) => {
          setCategory(res.data)
          console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
  return (
    <div className='flex justify-center '>
      <table className='w-[50%]'>
        <thead>
          <tr>
            <th className='text-left'>Category</th>
            <th className='text-left'>Top Gainers</th>
            <th className='text-right'>Market Capitalization	</th>
          </tr>
        </thead>
        <tbody></tbody>
      {category.map((category) => (
        <tr className='border-b border-sky-700 hover:bg-sky-700'>
            <td className='text-left'>{category.name}</td>
            <div className='flex gap-2'>
              {category.top_3_coins.map((photo) => (
                  <img src={photo} className="w-[30px] h-[30px]" alt="" />
              ))}
            </div>
            <td className='text-right'>${category.market_cap.toLocaleString()}</td>

        </tr>
      ))}
      </table>

    </div>
  )
}

export default Categories