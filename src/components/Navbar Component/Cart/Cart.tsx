"use client"
import Image from 'next/image'
import React from 'react'
import { useState,useEffect } from 'react'

const Cart = () => {
  const [cartDropdown, setCartDropdown] = useState(false)
  return (
    <div className='flex relative justify-center items-center'>
      <div className="" onClick={(e) => setCartDropdown((prev) => !prev)}>
        <Image src="/cart.png" width={28} height={28} alt='' />
      </div>
      <aside className={`w-[7rem] absolute top-[2.3rem] m-auto z-50 ${cartDropdown ? "visible" : "invisible"}`}>
        <div className="flex flex-col items-center rounded-lg p-4 gap-2 bg-white border-2 border-[#6B2D0E] ">
          <span>Profile</span>
          <span>Logout</span>
        </div>

      </aside> 
    </div>
  )
}

export default Cart