"use client"
import React from 'react'

export default function CardsWrapper ({children}:any) {
  return (
    <div className='grid grid-cols-midTemps lg:grid-cols-Temps lg:auto-rows-midLayout pt-3 lg:p-0 grid-flow-dense gap-[20px]  '>
      {children}
    </div>
  )
}

