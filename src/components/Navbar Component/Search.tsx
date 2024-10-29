"use client"
import React from 'react'
import CustomFormField from '../Form field/CustomFormField'
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const change = () => {
    console.log("hello there")
  }
  return (
      <div className='flex w-max h-max border-2 rounded-[5px]'>
          <div className="flex">
        <CustomFormField type='text' placeholder='search' name='Search' value={""} onChange={change} className='w-[15rem]  lg:w-[20rem] h-[2rem] px-[7px] focus:outline-none placeholder-shown:text-gray-400' />
          </div>
          <div className="flex items-center pr-[5px]">
              < BsSearch className='text-lg'/>
         </div>
          
    </div>
  )
}

export default Search