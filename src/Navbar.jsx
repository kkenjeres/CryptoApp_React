import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className=' flex justify-center border-b border-sky-700 '>
        <ul className='flex space-x-4 m-5 justify-center'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='categories'>Categories</Link></li>
        </ul>
      </div>
  )
}

export default Navbar