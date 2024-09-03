"use client"
import React from 'react'
import Image from "next/image";

interface DataType {
    name?: string,
    image: string,
    product?: string,
    description: string,
    amount?: number,
    imageStyle: string,
    width: number,
    height:number
}

const ImageCard = ({ image, product, description, amount, width, height, imageStyle, }: DataType) => {
  return (
      <div className='flex flex-col w-max justify-between items-center'>
          <div className={imageStyle}>
              <Image
                  src={image}
                  width={width}
                  height={height}
                  className="object-cover"
                  alt={description}
              />
          </div>
          <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between p-[10px]">
                  <span className="font-bold text-sm">{ description}</span>
                  <span className="font-bold text-sm">{ amount}</span>
              </div>
              <div className="">
                  <p className="text-slate-600 text-sm" >{ product}</p>
              </div>
          </div>
    </div>
  )
}

export default ImageCard