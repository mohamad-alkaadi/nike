import React from 'react'
import {hamburger} from "../assets/icons/index"
import {headerLogo} from "../assets/images//index"
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={29}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          <li></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav