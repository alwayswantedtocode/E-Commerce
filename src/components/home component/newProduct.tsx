"use client"
import React from 'react'
import CardsWrapper from '../Wrappers/CardsWrapper'
import ImageCard from './Image card/ImageCard'
import ActionBtn from '../Resuable Buttons/actionBtn'

const NewProduct = () => {

  const data = [
    {
      id: 1,
      title: "Summer Sale Collections",
      desc: "Sale! Up to 50% off!",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
    },
    {
      id: 2,
      title: "Winter Sale Collections",
      desc: "Sale! Up to 50% off!",
      image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
    },
    {
      id: 3,
      title: "Spring Sale Collections",
      desc: "Sale! Up to 50% off!",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
    },
    {
      id: 4,
      title: "Spring Sale Collections",
      desc: "Sale! Up to 50% off!",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
    },
  ]

  return (
    <section className="w-[100%] flex flex-col items-center mb-[5rem]">
      <div className="w-[80%] py-[10px] flex items-center justify-start">
        <h1 className='font-bold'>New Products</h1>
      </div>
      <CardsWrapper className='w-[80%] grid grid-cols-xsmallTemps md:grid-cols-smallTemp lg:grid-cols-Temps auto-rows-midLayout pt-3 lg:p-0 grid-flow-dense gap-[20px]'>
        {data.map((card) => (
          <div className=" w-[100%] border-blue700" key={card.id}>
            <ImageCard
              link='/test'
              firstImage={card.image}
              secondImage={card.image}
              // product={card.title}
              description={card.desc}
              amount={1}
              firstSizes="100vw"
              secondSizes="100vw"
              firstImagestyle=''
              SecondImagestyle=''
            />
            <div className="w-[100%] py-[7px] ">
              <ActionBtn Label="Add to Cart" btnClass=" text-red-400 w-[7rem] p-[5px] rounded-[5px] bg-white border-2 border-red-400 hover:bg-red-100 hover:text-white font-semi-bold"
                linkClass="" link="/cart" type="button" />
            </div>
          </div>
          // 
        ))}
      </CardsWrapper>
    </section>
  )

}

export default NewProduct