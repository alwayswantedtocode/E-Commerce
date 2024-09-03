"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
      <div className="flex flex-row gap-[5px] items-center p-[3px]">
          <div className="font-bold text-2xl">
              <Link href={""}>Yaba</Link>
          </div>
          <div className="">
              <Image
                  src="/logo.png"
                  width={18}
                  height={18}
                  className="object-cover"
                  alt=""
              />
          </div>
      </div>
  )
}

export default Logo