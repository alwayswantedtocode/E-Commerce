"use client"
import React, { useState } from 'react'

const Add = () => {

    const [quantity, setQuantity] = useState(1)

    const stock = 4
    const handleQuantity = (type: "i" | "d") => {
        if (type === "d" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
        if (type === "i" && quantity < stock) {
            setQuantity((prev) => prev + 1);
        }
    }
    return (
        <div className='flex flex-col gap-4 m-[3px]'>
            <h4 className="">Choose a Quantity</h4>
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button type='button' className="cursor-pointer text-xl" onClick={()=>handleQuantity("d")} disabled={quantity===1}>-</button>
                        {quantity}
                        <button className="cursor-pointer text-xl" onClick={() => handleQuantity("i")}
                        //disabled={quantity===stockNumber}
                        >+</button>
                    </div>
               

                <div className="text-xs">
                    only <span className='text-orange-500'>4 items</span> left! <br />{"Dont"} miss it
                </div>
            </div>
            <button type='button' className="w-36 text-sm rounded-3xl ring-1 ring-red-400 text-red-400 py-2 px-4 hover:bg-red-400 hover:text-white disable:cursor-not-allowed disabled:bg-pink-200 disabled:text-white">
                Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Add