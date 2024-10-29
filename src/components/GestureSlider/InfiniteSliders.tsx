"use client"
import React from 'react'
import CardsWrapper from "../Wrappers/CardsWrapper"
import Image from 'next/image'
import useInfiniteSlider from '@/hooks/useInfiniteSlider'


// type Data={
//     Image: string,
//     category: string,
// }
interface DataProps {
    Data: any[];
    link: string,
    firstSizes: string,
    Imagestyle?: string,
    onTouchStart: (value: {}) => void;
    onClick?: (value: {}) => void;
}
const InfiniteSliders = (props: DataProps) => {
    const { HandleGestureSlider, imagesIndex } = useInfiniteSlider(props.Data)
    
    return (
        <CardsWrapper className='w-[100%] flex items-center gap-[20px] overflow-x-hidden'>
            <div className='' onTouchStart={HandleGestureSlider}>
                {props.Data.map((data, index: number) => {
                    return (
                        <div className={`${imagesIndex === index ? "active" : ""}`} key={index}>
                            <div className="w-full flex relative h-80 ">
                                <Image
                                    src={data.Image}
                                    fill
                                    sizes={props.firstSizes}
                                    className={` ${props.Imagestyle}`}
                                    alt={data.category}

                                />
                            </div>
                            <div className="">
                                <span className="">{data.category}</span>
                            </div>
                        </div>

                    )
                })}
            </div>
        </CardsWrapper>

    )
}

export default InfiniteSliders