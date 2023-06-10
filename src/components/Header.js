import React from 'react'

import Kryptonia from '../assets/img/Kryptonia.svg'
import Nav from './Nav'
import AccountBtns from './AccountBtns'

import { CgMenuRight } from 'react-icons/cg'

const Header = ({ setNavMobile }) => {
  return (
    <header
      className='py-[30px] lg:pt-[60px]'
      data-aos='fade-down'
      ß
      data-aos-duration='2000'
    >
      <div className='container mx-auto flex items-center justify-between'>
        {/* logo */}
        <a href='#'>
          <img src={Kryptonia} alt='logo' />
        </a>
        <div className='hidden lg:flex gap-x-[55px]'>
          <Nav />
          <AccountBtns />
        </div>
        {/* navbar open */}
        <div
          onClick={() => setNavMobile(true)}
          className='lg:hidden cursor-pointer'
        >
          <CgMenuRight className='text-2xl' />
        </div>
      </div>
    </header>
  )
}

export default Header
