import React from 'react'
import Navimg from '../assets/navbar.png'
import Frame2 from '../assets/frame2.png'
import Car1 from '../assets/car1.png'
export default function Navbar() {
  return (
    <div className='container mt-[40px]'>
       <nav className='flex justify-between '>
        <img src={Navimg} alt="" />
        <ul className=' flex justify-between gap-[40px] items-center font-medium'>
          <li>
            <a  href="#!">Become a renter</a>
        </li>
          <li>
            <a href="#!">Rental deals</a>
        </li>
          <li>
            <a href="#!">How it work</a>
        </li>
          <li>
            <a href="#!">Why choose us</a>
        </li>
        </ul>
        <div className='flex gap-[30px] font-medium'>
          <button className='max-w-[54px]'>Sign in</button>

          <button className='w-[125px] h-[40px] rounded-[8px] bg-[#1572D3]'>Sign up</button>
          </div>
      </nav>

    <header className='mt-[154px] flex justify-between' >
      <div className='w-[390px] '>
        <p className='text-[48px] font-semibold mb-[40px] leading-[50px]'>Find, book and rent a car Easily </p>
        <p className='text-[18px] mb-[40px] '>Get a car wherever and whenever you need it with your IOS and Android device.</p>
      <img src={Frame2} alt="" />
      </div>
      <div>
        <img src={Car1} alt="" />
      </div>
    </header>


    </div>
  )
}