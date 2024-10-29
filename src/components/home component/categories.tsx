// "use client"
import React, { Suspense } from 'react'
import SingleComponent from "@/components/home component/SingleComponent"
import Slider from "@/components/GestureSlider/Slider"
// import useSlider from '@/hooks/useSlider'
import CategoriesSlide from '../GestureSlider/CategoriesSlide'


const Categories = () => {

   
    // const { HandleGestureSlider } = useSlider(data);

    return (
        <section className="w-[100%] flex flex-col items-center mb-[5rem]">
            <div className="w-[80%] py-[10px] flex items-center justify-start">
                <h1 className='font-bold'>Catergories</h1>
            </div>
            <Suspense fallback={"loading"}>
                <CategoriesSlide  />
            </Suspense>
            
        </section>

    )
}

export default Categories


