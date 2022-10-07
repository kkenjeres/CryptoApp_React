import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='h-[100px] flex justify-center bg-gray-500'>
        <ul className='flex space-x-4 m-5 justify-center'>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </div>
  )
}

export default Navbar