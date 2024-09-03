"use client"
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'

type dataType = {
  id: number,
  title:string,
  image: string,
  desc: string,
  url: string,
  bg:string
}
const HeroSlider = () => {
  const imageData: dataType[] = [
    // { id: 1, image: "", desc: "image 1" },
    // { id: 2, image: "", desc: "image 2" },
    // { id: 3, image: "", desc: "image 3" }
    {
      id: 1,
      title: "Summer Sale Collections",
      desc: "Sale! Up to 50% off!",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
      id: 2,
      title: "Winter Sale Collections",
      desc: "Sale! Up to 50% off!",
      image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
      bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
      id: 3,
      title: "Spring Sale Collections",
      desc: "Sale! Up to 50% off!",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
  ]
  const [index, setIndex] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex < imageData.length - 1 ? prevIndex + 1 : 0));
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [imageData.length])

  return (
    <div className='w-[100%] border-2 border-red-500 relative'>
      <div className="w-[100%] border02 border-green-500">
        {imageData.map((data, index) => {
          return (
            <Image
              key={data.id}
              src={data.image}
              width={100}
              height={100}
              className="object-cover"
              alt={data.desc}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HeroSlider