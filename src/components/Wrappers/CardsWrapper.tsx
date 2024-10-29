"use client"
import React from 'react'

interface propsType{
  className: string,
  children: React.ReactNode;
}

export default function CardsWrapper({ children, className }: propsType) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

