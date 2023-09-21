import React, {useState} from 'react'
import {hamburger} from "../assets/icons/index"
import {headerLogo} from "../assets/images//index"
import { navLinks } from '../constants'
import { GrClose, GrMenu } from 'react-icons/gr';

const Nav = () => {
  const [nav, setNav] = useState(false)
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} className={`${nav && 'hidden'}`} alt='Logo' width={130} height={29}/>
        </a>
        <ul className={`flex-1 flex justify-center items-center gap-16 max-lg:flex-col max-lg:h-fit max-lg:w-full max-lg:absolute max-lg:left-0 max-lg:bg-slate-400 max-lg:pt-40 max-lg:gap-1 max-lg:items-center ${!nav && 'max-lg:opacity-0'}`}>
          {navLinks.map((item) => (
            <li key={item.label} className='max-lg:pb-6'>
              <a href={item.href} className='font-montserrat landing-normal text-lg text-slate-gray max-lg:text-white'>{item.label}</a>
            </li>
          ))}
        </ul>
        <button className='lg:hidden cursor-pointer' onClick={() => setNav(!nav)}>
          <GrMenu className={`w-[25px] h-[25px] absolute cursor-pointer ${nav && 'opacity-0'}`}/>
          <GrClose className={`w-[25px] h-[25px]  ${!nav && 'opacity-0'} ${nav && 'opacity-1 relative'}`}/>
        </button>
      </nav>
    </header>
  )
}

export default Nav