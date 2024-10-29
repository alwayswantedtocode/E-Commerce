"use client"
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

interface DataProps {
    name?: string,
    firstImage?: string,
    secondImage?: string|undefined,
    product?: { __html: string };
    description?: string | undefined,
    amount?: number | undefined,
    SecondImagestyle?: string,
    firstImagestyle?: string,
    link?: string,
    firstSizes: string,
    secondSizes?: string
}

const ImageCard = ({ firstImage, secondImage, product, description, amount, firstSizes, secondSizes, link, firstImagestyle, SecondImagestyle }: DataProps) => {
    return (
        <div className='flex flex-col w-full justify-between items-center'>
            <div className='w-full flex relative h-80 '>
                {link && (
                    <Link href={link} className="w-full h-80">
                        <Image
                            src={firstImage}
                            fill
                            sizes={firstSizes}
                            className={`absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500 ${firstImagestyle}`}
                            alt={description}
                        />
                        {secondImage && <Image
                            src={secondImage}
                            fill
                            sizes={secondSizes}
                            className={`absolute object-cover rounded-md ${SecondImagestyle}`}
                            alt={description}
                        />}
                    </Link>
                )}
            </div>
            <div className="w-[100%] flex flex-col gap-[10px]">
                <div className="w-[100%] flex justify-between py-[10px] ">
                    <span className="font-bold text-sm" >{description}</span>
                    <span className="font-bold text-sm">₦{amount}</span>
                </div>
                <div className="w-[100%] py-[7px]">
                    {product && <span className="text-slate-600 text-sm" dangerouslySetInnerHTML={product}></span>}
                </div>
            </div>
        </div>
    )
}

export default ImageCard
