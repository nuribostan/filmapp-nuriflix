import React from 'react'

const Header = () => {
  return (
    <div>
        <nav>
            <h1 className='nav-title'>Nuri Bostan</h1>
            <ul className='menu'>
                <li className='menu-item'><a href="./">Home</a></li>
                <li className='menu-item'><a href="./wacthedList">Watched List</a></li>
                <li className='menu-item'><a href="./favorites">Favorites</a></li>
                <li className='menu-item'><a href="./search">Search</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header